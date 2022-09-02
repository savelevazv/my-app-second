import React from "react";
import { Btn } from "./Btn";
import { FC } from "react";

export const DownloadTheApp: FC = () => {
    return (
        <div className="download--app--container">
            <h3 style={{ textAlign: 'right' }} className="font--base style36">Установите наше<br />мобильное приложение</h3>
            <div className="btn--container" style={{ display: 'flex', gap: '17px', flexDirection: 'column', paddingLeft: '40px', marginTop: '40px' }}>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    AppStore
                </Btn>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Google Play
                </Btn>
            </div>
        </div>
    )
}