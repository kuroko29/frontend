import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  // นำเข้าไฟล์ CSS ที่สร้างขึ้น

export default function Card() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/3.png" layout="responsive" className="card-img-top" width={100} height={100} alt="Guide Quest" />
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">Guide Quest</h5>
                            <p className="card-text">
                                Quests are updated throughout, including god-level quests, side quests, events, and accessories.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/2.png" layout="responsive" className="card-img-top" width={100} height={100} alt="Guide Character" />
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">Guide Character</h5>
                            <p className="card-text">
                                Help with organizing teams, combos, character creation, adding artefacts and weapons, including arranging tiers for each character.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mb-4">
                    <div className="card">
                        <Image src="/assets/img/1.png" layout="responsive" className="card-img-top" width={100} height={100} alt="MAP" />
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">MAP</h5>
                            <p className="card-text">
                                Tells the Anemoculus warp point, mini-games, treasure chests, dungeons and bosses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
