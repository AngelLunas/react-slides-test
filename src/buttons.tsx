import React from 'react'

type functions = {
    next: () => void
    prev: () => void
    firstIndex: boolean
    lastIndex: boolean
    background: boolean
}

export const Buttons = ({next, prev, firstIndex, lastIndex, background}: functions) => {
    return(
        <div className='buttons__container'>
            <span className={background ? 'text_arrows text_arrows_alter' : 'text_arrows'}>
                Click the arrow to discover more.
            </span>
            <div onClick={prev} className={firstIndex ? 'buttons__btn buttons__btn__limit' : 'buttons__btn'}>
                <i className={firstIndex ? 'fa-solid fa-arrow-left buttons__text buttons__text__limit' : 'fa-solid fa-arrow-left buttons__text'}></i>
            </div>
            <div onClick={next} className={lastIndex ? 'buttons__btn buttons__btn__limit' : 'buttons__btn'}>
                <i className={lastIndex ? 'fa-solid fa-arrow-right buttons__text buttons__text__limit' : 'fa-solid fa-arrow-right buttons__text'}></i>
            </div>
        </div>
    )
}