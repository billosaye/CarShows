export interface CustomButttonProps{
    title: string;
    containerStyles?: string;
    handleClick?: () => void;
    btnType?: "button" | "submit" | "reset";
    rightIcon?: string;
    isDisabled?: boolean;
}

