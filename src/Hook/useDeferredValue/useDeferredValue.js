import { useDeferredValue, useMemo } from "react";

function UseDeferredValue() {
    // const query = useSearchQuery('');
    const deferredQuery = useDeferredValue('query');
  
    // Memoizing tells React to only re-render when deferredQuery changes,
    // not when query changes.
    const suggestions = useMemo(() =>
    //   <SearchSuggestions query={deferredQuery} />,
      [deferredQuery]
    );
  
    return (
      <>
        {/* <SearchInput query={query} /> */}
        {/* <Suspense fallback="Loading results..."> */}
          {suggestions}
        {/* </Suspense> */}
      </>
    );
  }
  export default UseDeferredValue