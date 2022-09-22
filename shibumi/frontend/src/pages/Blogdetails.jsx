import React from "react";
import "./blogdetails.scss";
import Latestsposts from "../components/Latestposts";
const Blogdetails = () => {
  return (
    <div className="blogdetails">
      <div className="blogdetails__cover">
        <div className="blogdetails__cover__date">
          <span>september 25,1998</span>
        </div>
        <div className="blogdetails__cover__title">
          <h1>How to find your best moisturizer</h1>
        </div>
      </div>
      <div className="blogdetails__container container">
        <div class="blogdetails__container__desc">
          <h2 className="firsth1">
            Maiores vel eligendi et maiores consequuntur tempore.
          </h2>
          <p className="firstp">
            Sit voluptatibus quia sunt. Dolor veniam et labore et omnis delectus
            enim molestiae sit. Facere non ratione soluta. Ut corrupti qui
            repellat distinctio reprehenderit quidem quis nulla. Quae omnis
            nostrum rerum soluta consequatur quo rerum. Quia qui quo voluptas
            similique.
          </p>
          <h3>
            Ut quo et illo necessitatibus distinctio dolor odio nemo officiis.
          </h3>
          <blockquote>
            In non ut. Nisi natus sed alias nam maiores natus. Veniam aliquam
            veniam sequi soluta vitae consequatur id id. Quia amet quae quae
            odio ut in quibusdam omnis dolor. Ex omnis natus consectetur.
          </blockquote>
          <p>
            Ullam porro est quaerat voluptates consequatur earum placeat.
            Quisquam corporis eos ut non magnam. Impedit perspiciatis et quaerat
            eum temporibus corrupti pariatur optio adipisci. Sapiente atque aut
            voluptatum voluptatem quia recusandae numquam laboriosam. Commodi
            incidunt quasi iure excepturi maxime culpa omnis ipsam. Veritatis
            nobis voluptatem sapiente.
          </p>
          <p>
            Voluptas non nobis. Mollitia quis pariatur. Aut occaecati reiciendis
            vero nam.
          </p>
          <h2>
            Molestias quibusdam quidem qui molestias architecto quibusdam
            blanditiis.
          </h2>
          <p>
            Veniam quod officia perspiciatis inventore dolores illo sit rem.
            Laboriosam omnis assumenda. Et deserunt autem. A accusantium nostrum
            et. Autem adipisci atque rerum cumque laudantium.
          </p>
          <h3>Enim voluptatem aut illum iure rerum veritatis.</h3>
          <blockquote>
            Quis debitis est dolorem at consequatur tempora sint reprehenderit
            ut. Voluptatibus dolor iusto minima. Harum optio tenetur aut. Quod
            aliquid vitae quo dignissimos similique. Esse sed optio rem labore
            hic temporibus.
          </blockquote>
          <p>
            Adipisci et culpa occaecati modi deserunt officiis sed ex. Dolorem
            omnis sit temporibus. Et tenetur exercitationem est deleniti vitae.
          </p>
          <p>
            At iure eos itaque cumque. Mollitia sed pariatur necessitatibus
            commodi quas delectus officiis. Laudantium laboriosam doloribus
            neque sunt autem dignissimos doloribus laborum. Ut repudiandae
            consequuntur nulla sunt.
          </p>
        </div>
      </div>
      <Latestsposts />
    </div>
  );
};

export default Blogdetails;
