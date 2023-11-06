import React from 'react'
import "./SingleBlogContent.css";
import Card from '../Common/Card/Card';
import CardTitle from '../Common/CardTitle/CardTitle';
import ShopByCat from '../StoreContent/ShopByCat';
import SingleBlogCard from './SingleBlogCard';

function SingleBlogContent() {
  return (
    <div className="single-blog-wrapper py-4">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className='single-blog-left-side'>
              <Card>
                <CardTitle className="card-title" title="Shop By Category" />
                <ShopByCat
                  categories={["Accessories", "Shoes", "Bags", "Corset"]}
                />
              </Card>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <SingleBlogCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogContent
