import { useDispatch, useSelector } from "react-redux";

// Hook personalizado para dispatch
export const useAppDispatch = () => useDispatch();

// Hook personalizado para selector
export const useAppSelector = (selector) => useSelector(selector);
