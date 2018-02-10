
export default entity => (
  {
    list: {
      fetch: `/${entity}/list/fetch`,
      cancelFetch: `/${entity}/list/cancelFetch`,
      load: `/${entity}/list/load`,
      remove: `/${entity}/list/remove`,
      pageChanged: `/${entity}/list/pageChanged`,
      search: {
        textChanged: `/${entity}/list/search/textChanged`,
      },
    },
    form: {
      changed: `/${entity}/form/changed`,
    },
    window: {
      open: `/${entity}/window/open`,
      close: `/${entity}/window/close`,
    },
  }
);
