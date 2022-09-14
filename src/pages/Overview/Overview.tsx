import React from 'react';
import Layout from 'container/Layout/Layout';
import Card from 'components/Card/Card';
import ItemCard from 'components/ItemCard/ItemCard';
import Table from 'components/Table';
import Select from 'components/Select/Select';
import Avatar from 'components/Avatar/Avatar';
import { header, requests, transactions } from 'container/mocks/data';
import Indicator from 'components/Indicator/Indicator';
import Metric from 'assets/icons/metric.svg';
import SearchBox from 'components/Search/Search';
import Pagination from 'components/Pagination/Pagination';

const Overview = () => {

  const filterData = [
    {
      name: 'All'
    },
    {
      name: 'Reconcilled'
    },
    {
      name: 'Un-reconcilled'
    },
    {
      name: 'Settled'
    },
    {
      name: 'Unsettled'
    }
  ]
  return (
    <Layout>
      <section>
        <div className="grid-cards">
          {transactions.map((item, index) => {
            return (
              <div key={index}>
                <Card title={item.title} subtitle={item.amount} img={Metric} />
              </div>

            )
          })}
        </div>
        <div className='flex'>
          <div className='item__card'>
            <ItemCard order_title='Orders' type='order' pending='20' reconciled='80' total_order='100' />
            <ItemCard payment_title='Payments' unrecon_payment='20' recon_payment='80' total_payment='100' />
          </div>
        </div>
        <div>
          <p className='payment'>Payments</p>
          <div className='filter__item'>
            <span>showing </span>
            <SearchBox placeholder='Search payments' />

            <Select
              options={filterData?.map((item) => ({
                name: item.name,
              }))} placeholder="Filter" label='Show' />

          </div>
          <div className='item__table'>
            <Table headers={header} tableData={requests} type="">
              {(row) => (
                <><td>
                  <div className='item__table_initial'>
                    <Avatar name='Vola Wale' />
                    <span className='item__table_span'>{row.type}</span>

                  </div>
                </td>
                  <td>
                    <span>{row.price}</span>

                  </td>
                  <td>
                    <span>{row.transaction}</span>
                  </td>
                  <td>
                    <div className='item__table__status'>
                      <span>{row.time}</span>
                      <span className='item__table__status_active'>
                        <Indicator isActive={row.status} color={row.status}>
                          {row.status}
                        </Indicator>
                      </span>
                    </div>
                  </td>
                </>
              )}
            </Table>
          </div>
          <Pagination />
        </div>

      </section>

    </Layout>

  )
}

export default Overview