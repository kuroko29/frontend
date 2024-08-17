import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/3.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body shadow-lg">
                            {/* เนื้อหาของ card-body */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/2.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body shadow-lg">
                            {/* เนื้อหาของ card-body */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/1.png" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                        <div className="card-body shadow-lg">
                            {/* เนื้อหาของ card-body */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
