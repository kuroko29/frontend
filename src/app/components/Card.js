import Image from "next/image"

export default function card() {
    return (
      
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <Image src="/assets/img/02.png" layout="responsive" className="card-img-top"  width={100} height={100} alt="..." />
                      <div className="card-body shadow-lg">
                        <h5 className="card-title">Basketball</h5>
                         <p className="card-text">Includes quality basketball balls.</p>
                        <a href="#" className="btn btn-warning">Go</a>
                      </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card">
                        <Image src="/assets/img/httpshypebeast.png" layout="responsive" className="card-img-top"  width={100} height={100} alt="..." />
                      <div className="card-body shadow-lg">
                        <h5 className="card-title">Sneakers</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-warning">Go</a>
                      </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <Image src="/assets/img/45.png" layout="responsive" className="card-img-top"  width={100} height={100} alt="..." />
                      <div className="card-body shadow-lg">
                        <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-warning">Go</a>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    )
}