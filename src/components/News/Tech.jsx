import React, { useEffect, useState } from 'react'

function Tech() {

    const [Tech , setTech] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    const key = 'd182a76173324ba5bc28fde3d7ca16cb'
    const Tech_url = `https://newsapi.org/v2/everything?q=apple&from=2024-12-16&to=2024-12-16&sortBy=popularity&apiKey=${key}`



    useEffect(() => {
        const fetchTech = async () => {
            try{
                const response = await fetch(Tech_url);
                if(!response.ok){
                    throw new error(`Error fetching Status: ${response.status}`)
                }
                const data = await response.json();

                const listData = data.articles.slice(8,14)
                setTech(listData);
                setLoading(false);
            }
            catch(err){
                setError(err.message);
                setLoading(false)
            }
        };

        fetchTech();
    }, []);


    

    

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching news...</div>
    }
  return (
    <div className='tech-container'>
        <div className="title">
            <h1>Tech-News</h1>
          </div>
      {
        Tech.map((item , index) => {
            return <div key={index} className='news-container'>
                <img src={item.urlToImage} alt="" />
                <div className="text">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h5>{item.author}</h5>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Tech
