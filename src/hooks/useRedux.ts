import { useSelector } from 'react-redux';
import { store } from '../store';

export default function useRedux() {
    const dispatch = store.dispatch;
    const states = useSelector((state) => state);
    return { states, dispatch };
}
