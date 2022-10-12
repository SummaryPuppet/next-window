function PGCalculator (){
  const buttonStyle = "bg-gray-900"

  return (
    <div className="flex flex-col">
      <input className="bg-slate-200" />
      <section className="grid grid-cols-4">
        <button className={buttonStyle}>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>-</button>
        <button>=</button>
      </section>
    </div>
  )
}

export default PGCalculator
