// Object that represents the sorting options for the article list result

import { sortBy } from 'lodash';


let SORTS =  {

    'NONE': ( list ) => list,
    'TITLE': ( list ) => sortBy(list, 'title'),
    'AUTHOR': ( list ) => sortBy(list, 'author'),
    'COMMENT': ( list ) => sortBy(list, 'num_comments'),
    'POINT': ( list ) => sortBy(list, 'points'),
}

export default SORTS