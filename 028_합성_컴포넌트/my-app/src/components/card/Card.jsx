
export default function Card (props) {
    return (
        
      <section>
        <img src="https://picsum.photos/400/200" alt="" />
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed
          illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo,
          quae. Consequatur.
        </p>
        {props.children}
      </section>
     
    )
  }