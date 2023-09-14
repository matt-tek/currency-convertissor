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

interface ModalProps {
    onSelect: (item: {key: number, currency: string, asset_path: string}) => void;
}

export {
    Props,
    DropdownProps,
    CurrencyType,
    ModalProps
};