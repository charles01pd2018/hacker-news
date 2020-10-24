// Array that represents the sorting options for the article list result

import { sortBy } from 'lodash';

// SORTS consists of an array of arrays
// Each element in the larger array corresponds to a sort type and a sort function
// 0 index -> sort type, 1 index -> sort function
let SORTS =  [

    [ 'NONE', ( list ) => list ],
    [ 'TITLE', ( list ) => sortBy(list, 'title') ],
    [ 'AUTHOR', ( list ) => sortBy(list, 'author') ],
    [ 'COMMENT', ( list ) => sortBy(list, 'num_comments') ],
    [ 'POINT', ( list ) => sortBy(list, 'points') ]
]

export default SORTS