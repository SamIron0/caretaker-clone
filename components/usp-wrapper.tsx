import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

interface WrapperProps extends TextProps {
  reverse?: boolean;
}

export const UspWrapper = ({
  children,
  className,
  reverse = false,
}: WrapperProps) => {
  return (
    <div
      className={classNames(
        'relative order-[var(--order)] flex min-h-[48rem] min-w-full snap-center flex-col items-center overflow-hidden rounded-[4.8rem] border text-center md:order-none md:min-w-0 py-8',
        className,
        'before:usp-mask before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-usp-gradient-2',
        reverse ? 'justify-start' : 'justify-end'
      )}
    >
      {children}
    </div>
  );
};

export const UspTitle = ({ children, className }: TextProps) => {
  return (
    <p className={classNames('text-3xl font-medium text-background', className)}>{children}</p>
  );
};

export const UspSubTitle = ({ children, className }: TextProps) => {
  return (
    <p
      className={classNames(
        'mt-4 max-w-[42rem] text-md font-medium text-grey',
        className
      )}
    >
      {children}
    </p>
  );
};
