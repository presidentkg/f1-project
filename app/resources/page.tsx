export default function Resources() {
    return (
        <main className="p-6 md:p-12 max-w-4xl mx-auto">
            <section className="mt-8 text-center">
                <h1 className="text-2xl lg:text-8xl font-extrabold text-slate-900 underline tracking-wide">Resources</h1>
                <p className="mt-8 text-lg text-slate-700">Here are the main websites and APIs I used to build this project:</p>
                <ul className="mt-4 text-base text-slate-600">
                    <li><a className="text-blue-600 hover:underline" href="https://www.formula1.com/" target="_blank" rel="noopener noreferrer">Official Formula 1 Website</a> - design reference</li>
                    <li><a className="text-blue-600 hover:underline" href="https://f1api.dev/" target="_blank" rel="noopener noreferrer">F1 API</a> - primary data source</li>
                    <li><a className="text-blue-600 hover:underline" href="https://openf1.org/" target="_blank" rel="noopener noreferrer">OpenF1</a> - secondary data source</li>
                    <li><a className="text-blue-600 hover:underline" href="https://docs.fastf1.dev/plotting_colormaps.html#team-colormaps-overview" target="_blank" rel="noopener noreferrer">FastF1</a> - team colormap</li>
                    <li><a className="text-blue-600 hover:underline" href="https://fonts.google.com/specimen/Racing+Sans+One" target="_blank" rel="noopener noreferrer">Google Fonts</a> - font</li>
                    <li><a className="text-blue-600 hover:underline" href="https://commons.wikimedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> - images included as local assets</li>
                </ul>
            </section>
        </main>
    );
}
