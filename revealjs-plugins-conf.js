ace: {
	theme: "ace/theme/solarized_dark"
},
keyboard: { // Reserved : N SPACE P H L K J Left Right Up Down Home End, B . Pause F ESC O S
	// List of codes here : https://keycode.info/
	// TODO : Use API to show shortcuts in '?' : Reveal.registerKeyboardShortcut('V', 'View slide fragments');
	34: function() { let {h, v} = Reveal.getIndices(); Reveal.slide(h, v, +Infinity); }, // 'PageDown' show all fragments
	33: function() { let {h, v} = Reveal.getIndices(); Reveal.slide(h, v, -1); }, // 'PageUp' show no fragment
	73: function() { window.open("../index.html","_self") }, // 'I' to index page
	88: function() { RevealSpotlight.togglePresentationMode(); }, // 'X' : toggle presentation mode
	78: function() { RevealChalkboard.toggleNotesCanvas() }, // 'N' : toggle notes canvas
	67: function() { RevealChalkboard.toggleChalkboard() },	// 'C' : toggle chalkboard
	46: function() { RevealChalkboard.clear() }, // 'DEL' : clear chalkboard
	 8: function() { RevealChalkboard.reset() }, // 'BASKSPACE' : reset chalkboard data on current slide
	68: function() { RevealChalkboard.download() },	// 'D' : download recorded chalkboard drawing
	90: function() { RevealChalkboard.colorNext() }, // 'Z' : cycle colors forward
	65: function() { RevealChalkboard.colorPrev() }, // 'A' : cycle colors backward
},
chalkboard: {
	penWidth: 3,
	chalkWidth: 4,
	chalkEffect: 0.1,
	erasorDiameter: 20,
	readOnly: false, // Configuation option allowing to prevent changes to existing drawings.
	transition: 800, // Gives the duration (in milliseconds) of the transition for a slide change, so that the notes canvas is drawn after the transition is completed.
	theme: "chalkboard", // Can be set to either "chalkboard" or "whiteboard".
	color: [ 'rgba(150,150,150,1)', 'rgba(255,255,255,0.5)' ], // The first value gives the pen color, the second value gives the color of the chalk.
	background: [ 'rgba(141,191,68,.1)', 'plugins/chalkboard/img/blackboard.png' ], // The first value expects a (semi-)transparent color which is used to provide visual feedback that the notes canvas is enabled, the second value expects a filename to a background image for the chalkboard.
	grid: false, // This pattern can be modified by setting the color, the distance between lines, and the line width, e.g. { color: 'rgb(127,127,255,0.1)', distance: 40, width: 2}
},
notes_pointer: {
	pointer: {
		size: 15,  // in pixels (scaled like the rest of reveal.js)
		color: 'rgba(239,82,91,0.8)',  // something valid for css background-color
		key: 'O' // '.' does not work
	},
	notes: {
		key: 'S'
	}
},
menu: {
	// Specifies which side of the presentation the menu will
	// be shown. Use 'left' or 'right'.
	side: 'left',

	// Specifies the width of the menu.
	// Can be one of the following:
	// 'normal', 'wide', 'third', 'half', 'full', or
	// any valid css length value
	width: 'normal',

	// Add slide numbers to the titles in the slide list.
	// Use 'true' or format string (same as reveal.js slide numbers)
	numbers: false,

	// Specifies which slide elements will be used for generating
	// the slide titles in the menu. The default selects the first
	// heading element found in the slide, but you can specify any
	// valid css selector and the text from the first matching
	// element will be used.
	// Note: that a section data-menu-title attribute or an element
	// with a menu-title class will take precedence over this option
	titleSelector: 'h1, h2, h3, h4, h5, h6',

	// If slides do not have a matching title, attempt to use the
	// start of the text content as the title instead
	useTextContentForMissingTitles: false,

	// Hide slides from the menu that do not have a title.
	// Set to 'true' to only list slides with titles.
	hideMissingTitles: true,

	// Adds markers to the slide titles to indicate the
	// progress through the presentation. Set to 'false'
	// to hide the markers.
	markers: true,

	// Specify custom panels to be included in the menu, by
	// providing an array of objects with 'title', 'icon'
	// properties, and either a 'src' or 'content' property.
	custom: [ { title: 'Keys', icon: '<i class="fa fa-keyboard">', content: `
		<ul class="slide-menu-items">
		<li class="slide-menu-item">
			<h3>Core</h3>
			<p>? : Show core keys</p>
		</li>
		<li class="slide-menu-item">
			<h3>Zoom</h3>
			<p>ALT+CLICK : Zoom-in</p>
		</li>
		<li class="slide-menu-item">
			<h3>Notes Pointer / Spotlight</h3>
			<p>O : Toggle pointer on/off</p>
			<p>L or (X then LEFT CLICK) : Toggle spotlight on/off</p>
		</li>
		<li class="slide-menu-item">
			<h3>Chalkboard</h3>
			<p>N : Notes canvas on/off</p>
			<p>C : Chalkboard on/off</p>
			<p>Z : Cycle pen colors forward</p>
			<p>A : Cycle pen colors backward</p>
			<p>DEL : Clear canvas/chalkboard</p>
			<p>BASCKSPACE : Reset chalkboard data on current slide</p>
			<p>D : Download drawing as JSON</p>
		</li>
		<li class="slide-menu-item">
			<h3>Menu</h3>
			<p>M : Open menu</p>
			<p>H or LEFT : Next left panel</p>
			<p>L or RIGHT : Next right panel</p>
			<p>K or UP : Up</p>
			<p>J or DOWN : Down</p>
			<p>U or PAGE UP : Page up</p>
			<p>D or PAGE DOWN : Page down</p>
			<p>HOME : Top</p>
			<p>END : Bottom</p>
			<p>SPACE or RETURN : Selection</p>
			<p>ESC : Close menu</p>
		</li>
		<li class="slide-menu-item">
			<h3>Custom</h3>
			<p>I : ../index.html</p>
		</li></ul>` }
	],

	// Specifies the themes that will be available in the themes
	// menu panel. Set to 'true' to show the themes menu panel
	// with the default themes list. Alternatively, provide an
	// array to specify the themes to make available in the
	// themes menu panel, for example...
	// [
	//     { name: 'Black', theme: 'css/theme/black.css' },
	//     { name: 'White', theme: 'css/theme/white.css' },
	//     { name: 'League', theme: 'css/theme/league.css' }
	// ]
	themes: false,

	// Specifies the path to the default theme files. If your
	// presentation uses a different path to the standard reveal
	// layout then you need to provide this option, but only
	// when 'themes' is set to 'true'. If you provide your own
	// list of themes or 'themes' is set to 'false' the
	// 'themesPath' option is ignored.
	themesPath: 'css/theme/',

	// Specifies if the transitions menu panel will be shown.
	// Set to 'true' to show the transitions menu panel with
	// the default transitions list. Alternatively, provide an
	// array to specify the transitions to make available in
	// the transitions panel, for example...
	// ['None', 'Fade', 'Slide']
	transitions: false,

	// Adds a menu button to the slides to open the menu panel.
	// Set to 'false' to hide the button.
	openButton: true,

	// If 'true' allows the slide number in the presentation to
	// open the menu panel. The reveal.js slideNumber option must
	// be displayed for this to take effect
	openSlideNumber: false,

	// If true allows the user to open and navigate the menu using
	// the keyboard. Standard keyboard interaction with reveal
	// will be disabled while the menu is open.
	keyboard: true,

	// Normally the menu will close on user actions such as
	// selecting a menu item, or clicking the presentation area.
	// If 'true', the sticky option will leave the menu open
	// until it is explicitly closed, that is, using the close
	// button or pressing the ESC or m key (when the keyboard
	// interaction option is enabled).
	sticky: true,

	// If 'true' standard menu items will be automatically opened
	// when navigating using the keyboard. Note: this only takes
	// effect when both the 'keyboard' and 'sticky' options are enabled.
	autoOpen: true,

	// If 'true' the menu will not be created until it is explicitly
	// requested by calling RevealMenu.init(). Note this will delay
	// the creation of all menu panels, including custom panels, and
	// the menu button.
	delayInit: false,

	// If 'true' the menu will be shown when the menu is initialised.
	openOnInit: false,

	// By default the menu will load it's own font-awesome library
	// icons. If your presentation needs to load a different
	// font-awesome library the 'loadIcons' option can be set to false
	// and the menu will not attempt to load the font-awesome library.
	loadIcons: true
},
