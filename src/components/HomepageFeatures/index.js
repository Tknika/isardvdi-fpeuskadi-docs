import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IsardVDI',
    image: require('@site/static/img/isardvdi.png').default,
    description: (
      <>
        IsardVDI is an open-source VDI solution that provides a complete
        virtual desktop infrastructure management platform.
      </>
    ),
  },
  {
    title: 'FP Euskadi',
    image: require('@site/static/img/fpeuskadi.jpeg').default,
    description: (
      <>
        Vocational training in the Basque Country.
      </>
    ),
  },
  {
    title: 'Tknika',
    image: require('@site/static/img/tknika.png').default,
    description: (
      <>
        Basque VET Applied Research Centre.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
