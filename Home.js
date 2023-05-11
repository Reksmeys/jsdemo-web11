import MyFooter from '../components/Footer';
import MyCard from './../components/Card';
import MyNav from './../components/Nav';

const Home = () => {
    return (
        <>
            <MyNav />
            <main>
                <div className="container ">
                    <div className="row g-3 border-0 shadow-sm h-100 mt-4">
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                        <div className="col-12 col-sm-4 col-lg-3">
                            <MyCard />
                        </div>
                    </div>
                </div>
                {/* <h1>This is home page</h1> */}
            </main>
            <MyFooter />
        </>
    )
}
export default Home;