import './PageOne.scss';
import { useIntlayer } from 'react-intlayer';

/**
 * Komponente für die erste Buchseite
 */
const PageOne = () => {
  // Wir holen die Texte mithilfe des Keys 'pageOne' aus Intlayer
  const { title, subtitle, description } = useIntlayer('pageOne');

  return (
    <article className="page-one">
      <h1 className="page-title">{title}</h1>
      <h2 className="page-subtitle">{subtitle}</h2>
      <p className="page-description">{description}</p>
    </article>
  );
};

export default PageOne;