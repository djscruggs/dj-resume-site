import { FC, memo, ReactNode } from 'react';

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea: FC<ContentAreaProps> = memo(({ children }) => {
  return <div className="w-full min-h-screen md:ml-[40%]">{children}</div>;
});

ContentArea.displayName = 'ContentArea';
export default ContentArea;
