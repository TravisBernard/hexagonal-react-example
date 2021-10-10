define(["filter-app"], function(initializeFilterApp) {
   const updateFilterWhenSelectionsChange = (newSelections) => {
      var url = new URL('https://sl.se')
      url.search = new URLSearchParams(newSelections).toString();

      fetch(url)
   }

   initializeFilterApp(document.querySelector('#FilterApplication'), updateFilterWhenSelectionsChange)
});