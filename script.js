// City Directory with all locations
const cityDirectory = {
    dallas: [
        {
            name: "Blue Beacon - Dallas",
            address: "2462 N Stemmons Fwy, Dallas, TX 75207",
            phone: "(214) 631-4445",
            hours: "24/7",
            rating: 4.8,
            website: "https://www.bluebeacon.com/locations/dallas-tx"
        },
        {
            name: "Wash Masters Truck Wash",
            address: "8901 John W. Carpenter Fwy, Dallas, TX 75247",
            phone: "(214) 637-9274",
            hours: "Mon-Sat: 7AM-7PM",
            rating: 4.6,
            website: "https://washmasters.com"
        },
        {
            name: "QuickWash Dallas",
            address: "3200 Irving Blvd, Dallas, TX 75247",
            phone: "(214) 638-9274",
            hours: "Mon-Sun: 6AM-10PM",
            rating: 4.7,
            website: "https://quickwash-dallas.com"
        },
        {
            name: "Premium Truck Wash Dallas",
            address: "4500 Harry Hines Blvd, Dallas, TX 75235",
            phone: "(214) 520-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.9,
            website: "https://premiumtruckwash.com"
        },
        {
            name: "Lone Star Truck Wash",
            address: "2800 Forest Ln, Dallas, TX 75234",
            phone: "(972) 241-9274",
            hours: "24/7",
            rating: 4.7,
            website: "https://lonestartruckwash.com"
        },
        {
            name: "Dallas Fleet Clean",
            address: "11200 Shady Trail, Dallas, TX 75229",
            phone: "(214) 358-9274",
            hours: "Mon-Sat: 6AM-8PM",
            rating: 4.8,
            website: "https://dallasfleetclean.com"
        },
        {
            name: "TruckSpa Dallas",
            address: "2150 Canadian Dr, Dallas, TX 75212",
            phone: "(214) 741-9274",
            hours: "Mon-Sun: 7AM-9PM",
            rating: 4.6,
            website: "https://truckspadallas.com"
        },
        {
            name: "Clean Machine Truck Wash",
            address: "5620 LBJ Freeway, Dallas, TX 75240",
            phone: "(972) 233-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://cleanmachinetx.com"
        },
        {
            name: "Big D Truck Wash",
            address: "8700 S Central Expy, Dallas, TX 75241",
            phone: "(214) 376-9274",
            hours: "Mon-Sun: 6AM-10PM",
            rating: 4.7,
            website: "https://bigdtruckwash.com"
        },
        {
            name: "Express Truck Wash Dallas",
            address: "2425 W Northwest Hwy, Dallas, TX 75220",
            phone: "(214) 352-9274",
            hours: "Mon-Sat: 7AM-8PM",
            rating: 4.8,
            website: "https://expresstruckwashdallas.com"
        },
        {
            name: "Trinity Truck Wash",
            address: "2300 Al Lipscomb Way, Dallas, TX 75215",
            phone: "(214) 421-9274",
            hours: "24/7",
            rating: 4.6,
            website: "https://trinitytruckwash.com"
        },
        {
            name: "Victory Wash Solutions",
            address: "3021 N Stemmons Fwy, Dallas, TX 75247",
            phone: "(214) 630-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.9,
            website: "https://victorywashsolutions.com"
        },
        {
            name: "Deep Ellum Truck Wash",
            address: "3300 Main St, Dallas, TX 75226",
            phone: "(214) 748-9274",
            hours: "Mon-Sat: 6AM-9PM",
            rating: 4.7,
            website: "https://deepellumtruckwash.com"
        },
        {
            name: "North Dallas Truck Care",
            address: "13500 Montfort Dr, Dallas, TX 75240",
            phone: "(972) 239-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://northdallastruckcare.com"
        },
        {
            name: "Grand Prairie Truck Wash",
            address: "2902 W Pioneer Pkwy, Grand Prairie, TX 75051",
            phone: "(972) 264-9274",
            hours: "Mon-Sun: 7AM-10PM",
            rating: 4.7,
            website: "https://grandprairietruckwash.com"
        }
    ],
    chicago: [
        {
            name: "Blue Beacon - Chicago",
            address: "16534 S Halsted St, Harvey, IL 60426",
            phone: "(708) 333-5823",
            hours: "24/7",
            rating: 4.7,
            website: "https://www.bluebeacon.com/locations/chicago-il"
        },
        {
            name: "Chicago Truck Wash",
            address: "3501 S Pulaski Rd, Chicago, IL 60623",
            phone: "(773) 277-9274",
            hours: "Mon-Sat: 7AM-8PM",
            rating: 4.9,
            website: "https://chicagotruckwash.com"
        },
        {
            name: "Windy City Wash",
            address: "4100 W 40th St, Chicago, IL 60632",
            phone: "(773) 523-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.8,
            website: "https://windycitywash.com"
        },
        {
            name: "Lake Shore Truck Spa",
            address: "1600 S Lake Shore Dr, Chicago, IL 60616",
            phone: "(312) 842-9274",
            hours: "24/7",
            rating: 4.7,
            website: "https://lakeshoretruckspa.com"
        },
        {
            name: "Midway Truck Wash",
            address: "5600 S Cicero Ave, Chicago, IL 60638",
            phone: "(773) 767-9274",
            hours: "Mon-Sun: 6AM-10PM",
            rating: 4.8,
            website: "https://midwaytruckwash.com"
        },
        {
            name: "O'Hare Fleet Services",
            address: "3501 N Mannheim Rd, Franklin Park, IL 60131",
            phone: "(847) 678-9274",
            hours: "24/7",
            rating: 4.6,
            website: "https://oharefleetservices.com"
        },
        {
            name: "Loop Truck Care",
            address: "500 W Madison St, Chicago, IL 60661",
            phone: "(312) 559-9274",
            hours: "Mon-Sat: 7AM-9PM",
            rating: 4.9,
            website: "https://looptruckcare.com"
        },
        {
            name: "South Side Truck Wash",
            address: "9500 S Stony Island Ave, Chicago, IL 60617",
            phone: "(773) 374-9274",
            hours: "Mon-Sun: 6AM-11PM",
            rating: 4.7,
            website: "https://southsidetruckwash.com"
        },
        {
            name: "Wrigleyville Wash Center",
            address: "3900 N Clark St, Chicago, IL 60613",
            phone: "(773) 935-9274",
            hours: "Mon-Sat: 7AM-8PM",
            rating: 4.8,
            website: "https://wrigleyvillewash.com"
        },
        {
            name: "West Loop Truck Care",
            address: "1200 W Randolph St, Chicago, IL 60607",
            phone: "(312) 466-9274",
            hours: "24/7",
            rating: 4.7,
            website: "https://westlooptruckcare.com"
        },
        {
            name: "North Side Express Wash",
            address: "4400 N Broadway, Chicago, IL 60640",
            phone: "(773) 561-9274",
            hours: "Mon-Sun: 5AM-10PM",
            rating: 4.8,
            website: "https://northsideexpress.com"
        },
        {
            name: "Magnificent Mile Truck Spa",
            address: "500 N Michigan Ave, Chicago, IL 60611",
            phone: "(312) 321-9274",
            hours: "Mon-Sat: 6AM-9PM",
            rating: 4.9,
            website: "https://magmiletruckspa.com"
        }
    ],
    houston: [
        {
            name: "Blue Beacon - Houston",
            address: "15919 North Fwy, Houston, TX 77090",
            phone: "(281) 873-0769",
            hours: "24/7",
            rating: 4.8,
            website: "https://www.bluebeacon.com/locations/houston-tx"
        },
        {
            name: "Houston Truck Wash",
            address: "8901 Market St, Houston, TX 77029",
            phone: "(713) 674-9274",
            hours: "Mon-Sat: 7AM-7PM",
            rating: 4.7,
            website: "https://houstontruckwash.com"
        },
        {
            name: "Texas Pride Wash",
            address: "5820 E Mt Houston Rd, Houston, TX 77050",
            phone: "(281) 458-9274",
            hours: "Mon-Sun: 6AM-9PM",
            rating: 4.8,
            website: "https://texaspridewash.com"
        },
        {
            name: "Space City Truck Wash",
            address: "12500 Gulf Fwy, Houston, TX 77034",
            phone: "(281) 481-9274",
            hours: "24/7",
            rating: 4.9,
            website: "https://spacecitytruckwash.com"
        },
        {
            name: "Bayou City Wash",
            address: "7100 Old Katy Rd, Houston, TX 77024",
            phone: "(713) 861-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.7,
            website: "https://bayoucitywash.com"
        },
        {
            name: "Port of Houston Truck Care",
            address: "8500 Clinton Dr, Houston, TX 77029",
            phone: "(713) 678-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://portofhoustontruckcare.com"
        },
        {
            name: "Energy Corridor Wash",
            address: "14800 Park Row, Houston, TX 77084",
            phone: "(281) 493-9274",
            hours: "Mon-Sat: 6AM-10PM",
            rating: 4.6,
            website: "https://energycorridorwash.com"
        },
        {
            name: "Galleria Truck Spa",
            address: "5085 Westheimer Rd, Houston, TX 77056",
            phone: "(713) 623-9274",
            hours: "Mon-Sun: 7AM-9PM",
            rating: 4.9,
            website: "https://galleriatruckspa.com"
        },
        {
            name: "Clear Lake Truck Wash",
            address: "2400 NASA Pkwy, Houston, TX 77058",
            phone: "(281) 333-9274",
            hours: "24/7",
            rating: 4.7,
            website: "https://clearlaketruckwash.com"
        },
        {
            name: "Midtown Express Wash",
            address: "2815 Main St, Houston, TX 77002",
            phone: "(713) 526-9274",
            hours: "Mon-Sat: 6AM-8PM",
            rating: 4.8,
            website: "https://midtownexpresswash.com"
        },
        {
            name: "Heights Truck Care",
            address: "2000 N Shepherd Dr, Houston, TX 77008",
            phone: "(713) 862-9274",
            hours: "Mon-Sun: 5AM-10PM",
            rating: 4.7,
            website: "https://heightstruckcare.com"
        },
        {
            name: "Memorial Wash Center",
            address: "9455 Katy Fwy, Houston, TX 77024",
            phone: "(713) 464-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://memorialwashcenter.com"
        },
        {
            name: "Pearland Truck Wash",
            address: "3500 Broadway St, Pearland, TX 77581",
            phone: "(281) 485-9274",
            hours: "Mon-Sat: 7AM-9PM",
            rating: 4.6,
            website: "https://pearlandtruckwash.com"
        },
        {
            name: "Spring Branch Wash",
            address: "8500 Long Point Rd, Houston, TX 77055",
            phone: "(713) 468-9274",
            hours: "Mon-Sun: 6AM-11PM",
            rating: 4.9,
            website: "https://springbranchwash.com"
        },
        {
            name: "Cypress Station Truck Care",
            address: "21500 Northwest Fwy, Cypress, TX 77429",
            phone: "(281) 890-9274",
            hours: "24/7",
            rating: 4.7,
            website: "https://cypressstationcare.com"
        },
        {
            name: "Sugar Land Express Wash",
            address: "13500 Southwest Fwy, Sugar Land, TX 77478",
            phone: "(281) 242-9274",
            hours: "Mon-Sat: 6AM-10PM",
            rating: 4.8,
            website: "https://sugarlandexpress.com"
        },
        {
            name: "Katy Freeway Truck Spa",
            address: "24500 Katy Fwy, Katy, TX 77494",
            phone: "(281) 392-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.7,
            website: "https://katyfreewayspa.com"
        },
        {
            name: "Woodlands Truck Wash",
            address: "26500 I-45, Spring, TX 77386",
            phone: "(281) 364-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://woodlandstruckwash.com"
        }
    ],
    atlanta: [
        {
            name: "Blue Beacon - Atlanta",
            address: "1650 Horizon Pkwy, Buford, GA 30518",
            phone: "(770) 945-2755",
            hours: "24/7",
            rating: 4.8,
            website: "https://www.bluebeacon.com/locations/atlanta-ga"
        },
        {
            name: "Atlanta Truck Wash Center",
            address: "2089 Bolton Rd NW, Atlanta, GA 30318",
            phone: "(404) 355-9274",
            hours: "Mon-Sun: 6AM-9PM",
            rating: 4.6,
            website: "https://atlantatruckwash.com"
        },
        {
            name: "Peach State Wash",
            address: "4366 Moreland Ave, Conley, GA 30288",
            phone: "(404) 366-9274",
            hours: "Mon-Sat: 7AM-8PM",
            rating: 4.7,
            website: "https://peachstatewash.com"
        },
        {
            name: "Downtown Atlanta Truck Spa",
            address: "275 Centennial Olympic Park Dr, Atlanta, GA 30313",
            phone: "(404) 521-9274",
            hours: "24/7",
            rating: 4.9,
            website: "https://downtownatlantaspa.com"
        },
        {
            name: "Buckhead Express Wash",
            address: "3365 Piedmont Rd NE, Atlanta, GA 30305",
            phone: "(404) 262-9274",
            hours: "Mon-Sat: 6AM-10PM",
            rating: 4.8,
            website: "https://buckheadexpress.com"
        },
        {
            name: "Midtown Truck Care",
            address: "1080 W Peachtree St NW, Atlanta, GA 30309",
            phone: "(404) 881-9274",
            hours: "Mon-Sun: 5AM-11PM",
            rating: 4.7,
            website: "https://midtowntruckcare.com"
        },
        {
            name: "Cumberland Wash Center",
            address: "2800 Cumberland Mall SE, Atlanta, GA 30339",
            phone: "(770) 435-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://cumberlandwash.com"
        },
        {
            name: "Perimeter Truck Wash",
            address: "4400 Ashford Dunwoody Rd, Atlanta, GA 30346",
            phone: "(770) 394-9274",
            hours: "Mon-Sat: 7AM-9PM",
            rating: 4.6,
            website: "https://perimetertruckwash.com"
        },
        {
            name: "Stone Mountain Fleet Care",
            address: "5600 Memorial Dr, Stone Mountain, GA 30083",
            phone: "(404) 292-9274",
            hours: "Mon-Sun: 6AM-10PM",
            rating: 4.7,
            website: "https://stonemountaincare.com"
        },
        {
            name: "Marietta Truck Wash",
            address: "1200 Cobb Pkwy S, Marietta, GA 30060",
            phone: "(770) 424-9274",
            hours: "24/7",
            rating: 4.8,
            website: "https://mariettatruckwash.com"
        }
    ]
};

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const ctaButtons = document.querySelectorAll('.cta-btn');

    function switchTab(tabId) {
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Tab button click handlers
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // CTA button click handlers
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Initialize city directory
    initializeCityDirectory();

    // Initialize form handling
    initializeFormHandling();

    initializeSearch();
    initializeFavorites();
    initializeLocationCards();
    initializeServiceTypes();

    // Update location counts on homepage
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        const city = card.getAttribute('data-city');
        if (city && cityDirectory[city]) {
            const locationCount = cityDirectory[city].length;
            const countElement = card.querySelector('.location-info p');
            if (countElement) {
                countElement.textContent = `${locationCount} locations`;
            }
        }
    });

    // Handle city-specific pages
    const locationsGrid = document.querySelector('.locations-grid');
    if (locationsGrid) {
        const cityName = window.location.pathname.split('/').pop().replace('.html', '');
        const cityLocations = cityDirectory[cityName];

        if (cityLocations) {
            locationsGrid.innerHTML = cityLocations.map(location => `
                <div class="location-detail-card">
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="score">${location.rating.toFixed(1)}</span>
                    </div>
                    <h2>${location.name}</h2>
                    <p class="address">
                        <i class="fas fa-map-marker-alt"></i> ${location.address}
                    </p>
                    <p class="hours">
                        <i class="far fa-clock"></i> ${location.hours}
                    </p>
                    <p class="phone">
                        <i class="fas fa-phone"></i> ${location.phone}
                    </p>
                    <a href="${location.website}" target="_blank" class="website-btn">
                        <i class="fas fa-globe"></i> Visit Website
                    </a>
                    <div class="price">Starting from <strong>$49.99</strong> / wash</div>
                    <a href="#" class="book-now-btn">Book Now</a>
                </div>
            `).join('');

            // Update page title
            const pageTitle = document.querySelector('.city-locations h1');
            if (pageTitle) {
                pageTitle.textContent = `Truck Wash Locations in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}`;
            }
        }
    }
});

// City directory initialization
function initializeCityDirectory() {
    const citiesContainer = document.querySelector('.cities-container');
    const citySearch = document.getElementById('citySearch');

    // Create and populate city sections
    function createCitySection(cityName, locations) {
        const section = document.createElement('section');
        section.className = 'city-section';
        section.innerHTML = `
            <h2>Local Semi Truck Wash in ${cityName}</h2>
            <div class="locations">
                ${locations.map(location => `
                    <div class="location-card">
                        <h3>${location.name}</h3>
                        <p><strong>Address:</strong> ${location.address}</p>
                        <p><strong>Phone:</strong> <a href="tel:${location.phone}">${location.phone}</a></p>
                        <p><strong>Hours:</strong> ${location.hours}</p>
                        ${location.website ? `<p><strong>Website:</strong> <a href="${location.website}" target="_blank">Visit Website</a></p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        return section;
    }

    // Populate all cities
    function populateCities() {
        citiesContainer.innerHTML = '';
        Object.entries(cityDirectory).forEach(([city, locations]) => {
            const cityName = city.charAt(0).toUpperCase() + city.slice(1);
            citiesContainer.appendChild(createCitySection(cityName, locations));
        });
    }

    // Search functionality
    citySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cityElements = citiesContainer.querySelectorAll('.city-section');

        cityElements.forEach(cityElement => {
            const cityName = cityElement.querySelector('h2').textContent.toLowerCase();
            const shouldShow = cityName.includes(searchTerm);
            cityElement.style.display = shouldShow ? 'block' : 'none';
        });
    });

    // Initial population
    populateCities();
}

// Form handling
function initializeFormHandling() {
    const form = document.querySelector('form[name="mobile-wash-booking"]');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const formData = new FormData(form);
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <h3>Thanks! We'll contact you soon to confirm your mobile semi truck wash.</h3>
                    <p>We've received your booking request and will get back to you within 24 hours.</p>
                `;

                // Replace form with success message
                form.parentNode.replaceChild(successMessage, form);

            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting your form. Please try again.');
            }
        });
    }
}

// Available cities and their coordinates (for location matching)
const availableCities = {
    'dallas': {
        name: 'Dallas',
        coords: { lat: 32.7767, lng: -96.7970 },
        services: ['Local Wash', 'Mobile Service']
    },
    'chicago': {
        name: 'Chicago',
        coords: { lat: 41.8781, lng: -87.6298 },
        services: ['Local Wash', 'Mobile Service']
    },
    'houston': {
        name: 'Houston',
        coords: { lat: 29.7604, lng: -95.3698 },
        services: ['Local Wash', 'Mobile Service']
    },
    'atlanta': {
        name: 'Atlanta',
        coords: { lat: 33.7490, lng: -84.3880 },
        services: ['Local Wash', 'Mobile Service']
    }
};

// Generic notification function
function showNotification(message, type = 'info', duration = 5000) {
    // Create notification container if it doesn't exist
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => notification.remove();
    notification.appendChild(closeBtn);

    // Add to container
    notificationContainer.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, duration);
}

// Initialize search functionality
function initializeSearch() {
    console.log('Initializing search...');
    
    const searchForm = document.querySelector('.search-box');
    const locationInput = document.querySelector('#locationInput');
    const dateInput = document.querySelector('#dateInput');
    const serviceSelect = document.querySelector('#serviceSelect');
    const searchBtn = document.querySelector('#searchButton');

    console.log('Form elements:', {
        form: searchForm,
        location: locationInput,
        date: dateInput,
        service: serviceSelect,
        button: searchBtn
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    if (dateInput) {
        dateInput.min = today;
        dateInput.value = today;
    }

    // Add click event listener to search button
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            console.log('Search button clicked');
            e.preventDefault();
            handleSearch();
        });
    }

    // Add submit event listener to form
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            console.log('Form submitted');
            e.preventDefault();
            handleSearch();
        });
    }
}

// Handle search form submission
function handleSearch() {
    console.log('Handling search...');
    
    const locationInput = document.querySelector('#locationInput');
    const serviceSelect = document.querySelector('#serviceSelect');
    const dateInput = document.querySelector('#dateInput');

    if (!locationInput || !serviceSelect || !dateInput) {
        console.error('Search form elements not found');
        return;
    }

    const location = locationInput.value.trim().toLowerCase();
    const service = serviceSelect.value;
    const date = dateInput.value;

    console.log('Search values:', { location, service, date });

    // Check if all fields are filled
    if (!location || !service || !date) {
        showNotification('Please fill in all search fields', 'error');
        return;
    }

    // If Mobile Service is selected, redirect to mobile service form
    if (service === 'Mobile Service') {
        window.location.href = '/mobile-service';
        return;
    }

    // Check for city match
    let cityMatch = null;
    if (location.includes('dallas')) cityMatch = 'dallas';
    else if (location.includes('chicago')) cityMatch = 'chicago';
    else if (location.includes('houston')) cityMatch = 'houston';
    else if (location.includes('atlanta')) cityMatch = 'atlanta';

    console.log('City match:', cityMatch);

    if (cityMatch) {
        // Redirect to the city page with search parameters
        const url = `/${cityMatch}?service=${encodeURIComponent(service)}&date=${encodeURIComponent(date)}`;
        console.log('Redirecting to:', url);
        window.location.href = url;
    } else {
        // Show no service notification with available cities
        const message = `
            <div class="notification-content">
                <h3>No Service Available Yet</h3>
                <p>We're sorry, but we don't currently have service in ${location}.</p>
                <p>We're expanding quickly! Please check back soon or try searching in:</p>
                <ul>
                    <li>Dallas</li>
                    <li>Chicago</li>
                    <li>Houston</li>
                    <li>Atlanta</li>
                </ul>
            </div>
        `;
        showNotification(message, 'info', 10000);
    }
}

// Make sure search is initialized when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing search...');
    initializeSearch();
});

function initializeFavorites() {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });
}

function initializeLocationCards() {
    const locationCards = document.querySelectorAll('.location-card');
    
    locationCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the city from the data attribute
            const city = card.getAttribute('data-city');
            
            // Create the city data object
            const cityData = {
                title: `Truck Wash Locations in ${city.charAt(0).toUpperCase() + city.slice(1)}`
            };

            // Update the featured section with the city's locations
            updateFeaturedLocations(cityData);
        });
    });
}

function updateFeaturedLocations(cityData) {
    const featuredGrid = document.querySelector('.featured-grid');
    const featuredSection = document.querySelector('.featured-locations');
    if (!featuredGrid || !featuredSection) return;

    // Update section title
    const sectionTitle = document.querySelector('.featured-locations h2');
    if (sectionTitle) {
        sectionTitle.textContent = cityData.title;
    }

    // Get locations from cityDirectory
    const cityLocations = cityDirectory[cityData.title.split(' in ')[1].toLowerCase()];
    
    if (!cityLocations) return;

    featuredGrid.innerHTML = cityLocations.map(location => `
        <div class="featured-card">
            <div class="featured-info">
                <div class="rating">
                    <span class="stars">★★★★★</span>
                    <span class="score">${location.rating}</span>
                </div>
                <h3>${location.name}</h3>
                <p>${location.address}</p>
                <p class="hours">${location.hours}</p>
                <p class="phone">${location.phone}</p>
                <a href="${location.website}" target="_blank" class="website-link">Visit Website</a>
                <div class="price">From <strong>$49.99</strong> / wash</div>
            </div>
        </div>
    `).join('');

    // Scroll to the featured section
    featuredSection.scrollIntoView({ behavior: 'smooth' });

    // Reinitialize favorites
    initializeFavorites();
}

// Featured locations data
const featuredLocations = [
    {
        name: "Blue Beacon - Dallas",
        address: "2462 N Stemmons Fwy",
        rating: 4.8,
        price: 49.99,
        image: "images/location1.jpg"
    },
    {
        name: "Wash Masters - Houston",
        address: "8901 Market Street",
        rating: 4.7,
        price: 54.99,
        image: "images/location2.jpg"
    },
    {
        name: "Chicago Truck Wash",
        address: "3501 S Pulaski Rd",
        rating: 4.9,
        price: 59.99,
        image: "images/location3.jpg"
    }
];

// Popular cities data
const popularCities = [
    {
        name: "Dallas",
        locations: 15,
        image: "images/dallas.jpg"
    },
    {
        name: "Chicago",
        locations: 12,
        image: "images/chicago.jpg"
    },
    {
        name: "Houston",
        locations: 18,
        image: "images/houston.jpg"
    },
    {
        name: "Atlanta",
        locations: 10,
        image: "images/atlanta.jpg"
    }
];

// Initialize service type functionality
function initializeServiceTypes() {
    const serviceCards = document.querySelectorAll('.service-card');

    // Add click handlers to service cards
    serviceCards.forEach(card => {
        const viewButton = card.querySelector('button');
        if (!viewButton) return;
        
        viewButton.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceType = card.getAttribute('data-service');
            
            // Handle different service types
            switch(serviceType) {
                case 'local':
                    window.location.href = 'local-facilities.html';
                    break;
                case 'mobile':
                    window.location.href = 'mobile-service.html';
                    break;
                case 'fleet':
                    window.location.href = 'fleet-service.html';
                    break;
                case 'express':
                    window.location.href = 'express-wash.html';
                    break;
            }
        });

        // Add hover effect to entire card
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            if (icon) icon.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            if (icon) icon.style.transform = 'scale(1)';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeServiceTypes();
    // ... other initializations ...
}); 