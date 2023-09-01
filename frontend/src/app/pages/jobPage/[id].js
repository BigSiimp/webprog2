import { useRouter } from "next/router";
import {Box, Typography} from '@mui/material'
import DetailPage from "../../components/page";

export default function JobPage() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Box>
            <DetailPage />
        </Box>
    )
}