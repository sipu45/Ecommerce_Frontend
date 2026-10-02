import { Pagination } from "@mui/material";

const Paginations = () => {
    return(
        <Pagination
            count={110}
            defaultPage={6} 
            siblingCount={0} 
            boundaryCount={2} 
            shape="rounded"
        />
    )
};

export default Paginations;