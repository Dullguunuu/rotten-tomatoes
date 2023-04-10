import React from "react";

interface myProps {
    viewerMeter: number;
    criticMeter: number;
}
const meterUrl = {
    m1: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg",
    m2: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-empty.cd930dab34a.svg",
    m3: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg",
};
const meterViewerUrl = {
    v1: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg",
    v2: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-rotten.f419e4046b7.svg",
    v3: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-empty.eb667b7a1c7.svg",
};
export const TomatoesMeter = ({
    viewerMeter,
    criticMeter,
}: myProps): JSX.Element => {
    const viewerUrl =
        viewerMeter > 60
            ? meterViewerUrl.v1
            : viewerMeter < 60
                ? meterViewerUrl.v2
                : meterViewerUrl.v3;

    const criticUrl =
        criticMeter > 60
            ? meterUrl.m1
            : criticMeter < 60
                ? meterUrl.m2
                : meterUrl.m3;

    return (
        <>
            <div className="flex items-center ">
                <div className="flex items-center pr-2">
                    <img src={criticUrl} width={20} alt="nometer" />
                    <span>{criticMeter}</span>%
                </div>
                <div className="flex items-center">
                    <img src={viewerUrl} width={20} alt="nometer" />
                    <span>{viewerMeter}</span>%
                </div>
            </div>
        </>
    );
};
