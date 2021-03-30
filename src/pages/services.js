import * as React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Template from '../components/template/template';

const service = [
  {
    name: 'Cloud Accounting Bookkeeping Packages',
    description:
      'Simplify your bookkeeping with convenient, user friendly software solutions. Integrate bank feeds to import transactions from your online bank and credit card accounts, create sales invoices and record expenses on the go via a smartphone app and dramatically reduce the amount of time spent on admin. The versatility of the software means that we can work with you in real time from anywhere in the country. Get in touch to discuss how we can help to make life that little bit easier for you.',
  },

  {
    name: 'Year End Accounts Preparation',
    description:
      'We will compile the Year End Accounts for your business from the books and records provided, carefully analyzing all transactions to ensure that everything is properly accounted for. These Accounts will then form the basis of your Tax Return. Our experience allows us to adapt to your individual method of bookkeeping, helping to keep costs down. A consultation is provided to discuss the accounts in more detail, highlighting any relevant points which could help to lower future expenditure.',
  },

  {
    name: 'Self Assessment',
    description:
      'We will complete your Self Assessment Tax Return for you and submit it to HM Revenue and Customs on your behalf. We will calculate your tax liability (if any) and will inform you of any payments to be made and when to make them. In a nut shell we will deal with all aspects of your tax affairs for you.',
  },
  {
    name: 'Start Ups',
    description:
      'We are happy to offer help and advice to people starting new businesses. We can offer tips on bookkeeping, correspond with HM Revenue on your behalf and much more. Whether you are starting up as a Sole Trader, Partnership or are thinking of forming a Limited Company, we can help your new venture get off to the best possible start.',
  },
  {
    name: 'Corporation Tax',
    description:
      'We will prepare the Accounts of your Limited Company from your books and records, carefully analyzing all transactions to ensure that everything is properly accounted for. We will calculate any Corporation Tax Liability and submit the relevant Accounts and Corporation Tax Returns with HMRC and Companies House on your behalf. We will also deal all aspects associated with the Directors individual Self Assessment Tax Returns.',
  },
  {
    name: 'VAT',
    description:
      'VAT registered business with a Turnover above £85,000.00 as of 1st April 2019 are requireed to keep digital records and change the way in which they submit VAT Returns. We provide a range of solutions from full Cloud Accounting bookkeeping packages to help and advice on how to adapt existing manual and spreadsheet based systems. We can prepare and submit VAT Returns on your behalf from your records or provide help and assistance for you to complete them yourself. We also offer help and advice regarding VAT registration and the various VAT schemes that are availible to small businesses which may be better suited to your needs.',
  },
];
const Services = () => {
  return (
    <>
      <main>
        <title>Services</title>
        <Template
          title='Services'
          subtitle='We understand the importance of building close working relationships with our clients so whether you are a Sole Trader, Partnership or a small Limited Company, we can offer Year round help & advice and provide tailor made Accountancy packages, incorporating Year End Accounts Preparation, Self Assessment, VAT and Taxation services to suit your needs. '
        >
          <Box
            className='justify-between container about'
            display='flex'
            flexDirection='row'
            mb={4}
            flexWrap='wrap'
          >
            {service.map((s) => (
              <Box className='width-50 ' display='flex' flexDirection='column'>
                <Typography
                  variant='h4'
                  gutterBottom
                  component='h2'
                  align='center'
                >
                  {s.name}
                </Typography>
                <Typography variant='body1' paragraph component='p'>
                  {s.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Template>
      </main>
    </>
  );
};

export default Services;
