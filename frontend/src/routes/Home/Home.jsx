import { useEffect, useState } from "react"

import url from "../../axios/config"
import "./Home.css"
import { Link } from "react-router-dom"

export const Home = () => {

  const [parties, setParties] = useState(null)


  useEffect(() => {

    const loadParty = async () => {

      const res = await url.get("/party")
      console.log(res.data)
      setParties(res.data)
    }
    loadParty();

  }, [])

  if (!parties) return <p className="loading">Carregando ...</p>

  return (
    <main className='home-container'>
      <div className="container home">
        <h2>Suas Festas</h2>

        <section className='party-container'>
          {parties.map(party => (
            <div className="party" key={party._id}>
              <img src={party.image} alt="#" />
              <p>{party.title}</p>
              <Link to={`details/${party._id}`} className="btn-details">Detalhes</Link>
            </div>
          )
          )}

        </section>



      </div>
    </main>
  )
}
