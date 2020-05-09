import React from 'react';
import {Songs} from '../songs/Songs';
import {Search} from '../songs/Search';

export const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Songs />
        </React.Fragment>
    )
}
