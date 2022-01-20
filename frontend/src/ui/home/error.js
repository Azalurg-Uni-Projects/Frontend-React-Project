import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Error = () => {
    const { t } = useTranslation();

    return(
        <div>
            <h1>ERROR</h1>
            <p><Link to="/" className="Btn Delete">{t("Reload")}</Link></p>
        </div>)
}

export default Error