import currency from './constant';
interface Props {
    navigation: any
}

interface DropdownProps {
    label: string
    data: Array<{ key: number; currency: string; asset_path: string }>;
    onSelect: (item: {key: number, currency: string, asset_path: string}) => void;
}

interface CurrencyType {
    key: number,
    currency: string,
    asset_path: string
}

export {
    Props,
    DropdownProps,
    CurrencyType
};