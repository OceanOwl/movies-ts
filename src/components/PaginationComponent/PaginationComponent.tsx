import React from 'react';
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery({page: value.toString()});
    };
    return (
        <div>
            <Pagination
                page={+page}
                count={500}
                onChange={handlePageChange}/>
        </div>
    );
};

export {PaginationComponent};