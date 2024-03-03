import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360p" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6g2MK9IC03jptgNUAYqa7JvKM26drutgwKw&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Veg Burger</h5>
                    <p className="card-text"></p>
                    <div className="container w-100"  >
                        <select className="m-2 h-100 bg-success">
                            {Array.from(Array(10), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className=" m-2 h-100 bg-success">
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>

                        </select>
                        <div className="d-inline h-100">Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
