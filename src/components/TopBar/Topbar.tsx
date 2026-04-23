import './style.less'

function Topbar() {
    return (
        <>
            <div className="top-bar">
                <p>
                    I'm flatterd you're visiting my site from Mobile side!
                    <br />
                    Whereas the mobile version is still WIP.
                    <br />
                    I appreciate if you could visit from laptop or tablet <span style={{color : 'red'}}>&lt;3</span>
                </p>
            </div>
        </>
    );
}

export default Topbar
