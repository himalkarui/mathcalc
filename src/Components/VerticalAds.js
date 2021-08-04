import * as React from 'react';
export default function VerticalAds() {

    React.useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {

        }
    }, [])

    return (
        <>   {/* <!-- vertical ads --> */}
            <div style={{ display: 'none' }}>
                {/* <!-- mathcalc vertical ads --> */}
                <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7365466138029430"
                    data-ad-slot="1095146861" data-ad-format="auto" data-full-width-responsive="true"></ins>
            </div>
        </>
    )
}