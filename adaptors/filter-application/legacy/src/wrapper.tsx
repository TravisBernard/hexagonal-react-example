import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import {FilterApp, FilterAppDataProvider, useFilterApp} from 'filter-application'

interface Props {
   onSelectionsChanged: (any) => void
   onReady?: (any) => any
}

const Wrapper: React.FC<Props> = ({onSelectionsChanged, onReady}) => {

   const filterDetails = {
      filters: [
         {
            title: "Colour",
            fieldName: "color",
            options: [{
               name: "Red",
               value: "red"
            }, {
               name: "Blue",
               value: "blue"
            }, {
               name: "Green",
               value: "green"
            }]
         },
         {
            title: "Size",
            fieldName: "size",
            options: [{
               name: "Small",
               value: "small"
            }, {
               name: "Medium",
               value: "medium"
            }, {
               name: "Large",
               value: "large"
            }]
         },
      ],
      defaults: {
         color: 'blue'
      }
   }

   const { selections, clearFilter } = useFilterApp();

   useCallback(() => {
      onSelectionsChanged(selections)
   }, [selections])

   if (onReady) {
      useCallback(() => {
         onReady({selections, clearFilter})
      }, [clearFilter])
   }

   return <FilterAppDataProvider defaults={filterDetails.defaults}>
      <FilterApp title={"Filter Products By"} filters={filterDetails.filters} />
   </FilterAppDataProvider>
}

export const initializeFilterApp = (domNode, onSelectionsChanged, onReady) => {
   ReactDOM.render(<Wrapper onSelectionsChanged={onSelectionsChanged} onReady={onReady} />, domNode);
}