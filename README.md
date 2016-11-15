# infiniteScrollAngularTable
Directive for Lazy Loading of data into the UIcomponents

#Requirement
For scenarios where the amount of data to be displayed in a table is likely to affect the page load, a nice enhancement is to have the data split in smaller pieces, being retrieved and rendered according to the way the user interacts with the table.
The user experience will be quite similar to what Facebook and Twitter have in their timeline pages. On the page load, the table will have just a subset of the data. The user can scroll the table, but before such a scrolling hits the bottom, the table content is augmented with another data subset. The user is then able to scroll over that new subset and the process of presenting data sets goes on.

#Usage
```html
<tbody lola-infinite-scroll="loadMoreRecords()">
            <tr ng-repeat="deal in dealList">
                <td>{{deal.dateValue | date:'mediumDate'}}</td>
                <td>{{deal.limit}}</td>
            </tr>
</tbody>
```
