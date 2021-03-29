import * as React from 'react';

import Helmet from 'react-helmet';

// markup
const Helmets = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Small Business Accountancy' />
        <meta
          name='description'
          content="Small Business Accountancy are Accountants based in Brighouse and have a growing reputation as one of the region's most effective accountancy firms for individual clients and small businesses. Our firm expertly attends to all your taxation and business needs. Thanks to our expertise, dedication and years of experience in consulting and assessment, we can offer you support that you can rely on."
        />
        <meta
          name='keywords'
          content={[
            'Year End Accounts Preparation',
            'Self Assessment',
            'VAT',
            'Taxation',
            'calderdale',
            'Halifax',
            'huddersfield',
            'Bradford',
            'West Yorkshire',
            'Corporation Tax',
            'Start ups',
            'Nationwide online Accountancy',
            'Accountancy services',
            'Free initial consultation',
            'small Limited Company',
            'Sole Trader',
            'Tax',
            'Accountancy',
          ]}
        />
      </Helmet>
    </>
  );
};

export default Helmets;
