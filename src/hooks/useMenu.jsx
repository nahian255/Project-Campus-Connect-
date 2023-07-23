import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: name = [] } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await axiosSecure.get('/name');
            return res.data
        }
    });
    return [name]
}
export default useMenu