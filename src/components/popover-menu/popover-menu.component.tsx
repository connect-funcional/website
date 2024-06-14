import { ReactNode } from 'react';

import { CheckSVG } from '@/media/svg';

import { Div, DivProps } from '../div/div.component';
import { Icon } from '../icon/icon.component';
import { Popover, TriggerButtonProps } from '../popover';
import { Title } from '../title/title.component';
import styles from './popover-menu.module.scss';

export interface PopoverMenuRootProps extends DivProps {
  triggerButtonProps: TriggerButtonProps;
  triggerButtonContent: ReactNode;
}

const Root = ({
  triggerButtonProps,
  triggerButtonContent,
  children,
  ...props
}: PopoverMenuRootProps) => (
  <Popover.Root>
    <Popover.TriggerButton {...triggerButtonProps}>
      {triggerButtonContent}
    </Popover.TriggerButton>

    <Popover.Content>
      <Div status="over" gap="unset" padding="unset" borderRadius {...props}>
        {children}
      </Div>
    </Popover.Content>
  </Popover.Root>
);

Root.displayName = 'PopoverMenu.Root';

export interface PopoverMenuSectionProps extends DivProps {
  header?: false | ReactNode;
}

const Section = ({ children, header, ...props }: PopoverMenuSectionProps) => (
  <Div
    gap="unset"
    padding={{ top: 'm', bottom: 'm', left: 'unset', right: 'unset' }}
    {...props}
  >
    {header && (
      <Div
        padding={{
          top: 'xs',
          bottom: `xs`,
          left: 'xl',
          right: '2xl',
        }}
      >
        {typeof header === 'string' ? (
          <Title.H3 size="l">{header}</Title.H3>
        ) : (
          header
        )}
      </Div>
    )}

    {children}
  </Div>
);

Section.displayName = 'PopoverMenu.Section';

export interface PopoverMenuItemProps extends DivProps {
  displayCheckIcon?: boolean;
  iconComponent?: false | ReactNode;
}

const Item = ({
  displayCheckIcon,
  iconComponent,
  children,
  ...props
}: PopoverMenuItemProps) => (
  <Div
    status="ghost"
    display="flex-row-center"
    gap="s"
    padding={{ top: 'm', bottom: 'm', left: 'xl', right: '3xl' }}
    {...props}
  >
    <Div className={styles['item-icon-container']}>
      {displayCheckIcon && (
        <Icon>
          <CheckSVG />
        </Icon>
      )}
      {iconComponent && iconComponent}
    </Div>

    <Div display="flex-row-center" gap="s">
      {children}
    </Div>
  </Div>
);

Item.displayName = 'PopoverMenu.Item';

/**
 * # PopoverMenu component
 *---
 * @example
 * ```tsx
 * <PopoverMenu.Root
 *   triggerButtonProps={{
 *     status = 'default-ghost',
 *     title = 'This is a title',
 *     'aria-label': 'This is a aria-label',
 *   }}
 *   triggerButtonContent={
 *     <Icon>
 *       <GearSVG />
 *     </Icon>
 *   }
 * >
 *   <PopoverMenu.Section header="This is a title">
 *     <PopoverMenu.Item displayCheckIcon={true}>
 *       Item content comes here..
 *     </PopoverMenu.Item>
 *
 *     <PopoverMenu.Item>
 *       Item content comes here..
 *     </PopoverMenu.Item>
 *   </PopoverMenu.Section>
 *
 *   <Line />
 *
 *   <PopoverMenu.Section header="This is a title">
 *     <PopoverMenu.Item>
 *       Item content comes here..
 *     </PopoverMenu.Item>
 *
 *     <PopoverMenu.Item displayCheckIcon={true}>
 *       Item content comes here..
 *     </PopoverMenu.Item>
 *   </PopoverMenu.Section>
 * </PopoverMenu.Root>
 * ```
 *---
 * ### PopoverMenu.Root
 * @param triggerButtonProps - Props of the trigger button
 * @param triggerButtonContent - Content of the trigger button
 *---
 * ### PopoverMenu.Section
 * @param header - Section header title area
 *---
 * ### PopoverMenu.Item
 * @param displayCheckIcon - Display a check icon on the left area of the item content __Default: False__
 * @param iconComponent - Icon to display on the left area of the item content
 */
export const PopoverMenu = { Root, Section, Item };
