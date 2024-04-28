import './PageViewWrapper.css';

// eslint-disable-next-line react/prop-types
export const PageViewWrapper = ({children}) => {
  return (
    <main className="page-view-wrapper">
      {children}
    </main>
  )
};
