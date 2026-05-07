import { useIntlayer } from "react-intlayer";

//hier wird das 'onClick' event als Prop übergeben, damit sagen wir dem Button was er tun soll, wenn er geklickt wird
const NextButton = ({ onClick, disabled }) => {
    //hier ziehen wir uns die Daten aus der .ts Datei
    const {label, ariaLabel} = useIntlayer('next-button'); //mit Bindestrich, da es in der .ts Datei so definiert ist
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {label}
        </button>
    )
}

export default nextButton;