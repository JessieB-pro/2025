import berry_1 from '../assets/berry_1.jpg'

export default function Enigmes() {
  return (
    <>
      <div id="enigmes" className="container-fluid">
        
        <div className="title">
          <h1 className="animate flipInX">NOUVEL AN 2025</h1>
        </div>

        <div className="heading">
          <h1 className='mb-5'>ONE PIECE TREASURE HUNT</h1>
        </div>

        <div className="col-xs-8 col-md-4 profile-picture">
          <img src={berry_1} className="rounded-circle" alt="berry" />
        </div>

        <div className="heading">
          <h3 className="animate flash mt-5">Indice n°... : .......</h3>
        </div>

      </div>
    </>
  )
}
