'use client';

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  Placement,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
import * as React from 'react';

import { XSVG } from '@/media/svg';

import {
  Button,
  ButtonProps,
  ButtonPropsWithRef,
} from '../button/button.component';
import { Icon } from '../icon/icon.component';

interface PopoverProps {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function usePopover({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverProps = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<
    string | undefined
  >();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'end',
      }),
      shift({ padding: 5 }),
    ],
  });

  const { context } = data;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId],
  );
}

type ContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setDescriptionId: React.Dispatch<
        React.SetStateAction<string | undefined>
      >;
    })
  | null;

const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};

function Root({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode;
} & PopoverProps) {
  // this can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
}

Root.displayName = 'Popover.Root';

export interface TriggerButtonProps extends ButtonPropsWithRef {
  asChild?: boolean;
}

const TriggerButton = ({
  children,
  ref: propRef,
  asChild = false,
  ...props
}: TriggerButtonProps) => {
  const context = usePopoverContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    );
  }

  return (
    <Button
      ref={ref}
      data-isopen={context.open}
      current={context.open}
      {...context.getReferenceProps(props)}
    >
      {children}
    </Button>
  );
};

TriggerButton.displayName = 'Popover.TriggerButton';

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function Content(props, propRef) {
  const { context: floatingContext, ...context } = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      {context.open && (
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            style={{
              position: context.strategy,
              top: context.y ?? 0,
              left: context.x ?? 0,
              width: 'max-content',
              ...props.style,
            }}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
});

Content.displayName = 'Popover.Content';

const CloseButton = ({
  status = 'default-ghost',
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const { setOpen } = usePopoverContext();

  return (
    <Button
      status={status}
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      {...props}
    >
      {children || (
        <Icon>
          <XSVG />
        </Icon>
      )}
    </Button>
  );
};

CloseButton.displayName = 'Popover.CloseButton';

/**
 * # Popover component
 *---
 * @example
 * ```tsx
 * <Popover.Root>
 *   <Popover.TriggerButton>
 *     Lorem ipsum
 *   </Popover.TriggerButton>
 *
 *   <Popover.Content>
 *     // Here comes the content..
 *   </Popover.Content>
 * </Popover.Root>
 * ```
 *---
 * ### Popover.Root
 *---
 * ### Popover.TriggerButton
 *---
 * ### Popover.Content
 *---
 * ### Popover.CloseButton
 */
export const Popover = { Root, TriggerButton, Content, CloseButton };
