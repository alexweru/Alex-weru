// ============================================
// PROJECT MODALS - Detailed Project Information
// ============================================

const projectData = {
    fishRecognition: {
        title: "Fish Species Recognition System",
        icon: "bx-water",
        color: "blue",
        summary: "Computer vision model for identifying East African fish species in real-time.",
        fullDescription: "A production-grade object detection system trained specifically for marine conservation and commercial fishing documentation in Kenyan waters. The model identifies 23 local fish species with 87% accuracy on edge devices.",
        keyFeatures: [
            "Real-time fish detection from live camera feed",
            "Works offline on Raspberry Pi with camera module",
            "Confidence score display for each detection",
            "Batch processing for analyzing catch photos",
            "Export detection logs to CSV/JSON",
            "Species count tracking by fishing trip"
        ],
        technicalStack: [
            "Python 3.9+",
            "YOLOv8 (Ultralytics)",
            "OpenCV for image preprocessing",
            "LabelImg for annotation",
            "Raspberry Pi 4 (edge deployment)",
            "Flask for web demo interface"
        ],
        challenges: [
            "Limited labeled dataset for East African species - manually annotated 15,000+ images",
            "Varying lighting conditions on fishing boats - applied augmentation techniques",
            "Running on edge hardware - optimized model with TensorRT"
        ],
        results: [
            "87% mAP on test dataset",
            "15 FPS on Raspberry Pi 4",
            "3 seconds per image batch processing",
            "Deployed at 2 pilot fishing cooperatives"
        ],
        client: "Kenya Marine & Fisheries Research Institute",
        timeline: "January 2024 - March 2024",
        status: "Pilot phase",
        repoLink: "#",
        demoLink: "#"
    },
    posSystem: {
        title: "Titan POS System",
        icon: "bx-cart",
        color: "purple",
        summary: "Complete point-of-sale solution for retail stores with offline capability.",
        fullDescription: "A desktop-based POS system built from scratch for small to medium retail businesses in Kenya. Designed to work without constant internet connection while maintaining data integrity and providing comprehensive reporting.",
        keyFeatures: [
            "Product management with barcode scanning",
            "Inventory tracking with low stock alerts",
            "Sales dashboard with daily/monthly views",
            "Expense tracking and categorization",
            "Customer management with purchase history",
            "PDF receipt generation and printing",
            "Offline mode with automatic sync",
            "Multi-user with role-based access",
            "Backup and restore functionality",
            "Export reports to Excel/PDF"
        ],
        technicalStack: [
            "Python 3.10",
            "Tkinter for GUI",
            "SQLite (local) / PostgreSQL (cloud)",
            "ReportLab for PDF generation",
            "Pandas for data analysis",
            "Openpyxl for Excel export",
            "pyinstaller for executable build"
        ],
        screensModules: [
            "Login & User Management",
            "Point of Sale Interface",
            "Inventory Management",
            "Sales Reports",
            "Expense Manager",
            "Customer Database",
            "System Settings"
        ],
        metrics: [
            "3 active retail stores",
            "8,000+ transactions/month",
            "2,500+ products tracked",
            "99.8% uptime"
        ],
        client: "Nairobi Retailers (3 locations)",
        timeline: "October 2023 - Present (v2.1.0)",
        status: "Production",
        repoLink: "#",
        demoLink: "#"
    },
    sportTallying: {
        title: "SportScore Tournament Tracker",
        icon: "bx-trophy",
        color: "green",
        summary: "Web-based platform for managing school sports tournaments and competitions.",
        fullDescription: "A full-stack web application that digitizes the entire tournament management process for schools. Eliminates paper brackets and manual score calculation errors.",
        keyFeatures: [
            "Tournament bracket auto-generation (single/double elimination)",
            "Live score entry with validation",
            "Team and player registration",
            "Automated rankings and standings",
            "Match scheduling and calendar view",
            "PDF report generation for fixtures/results",
            "Email notifications for schedule changes",
            "Statistics dashboard for each team",
            "Multi-sport support (basketball, football, volleyball)",
            "Admin panel for tournament organizers"
        ],
        technicalStack: [
            "Flask (Python web framework)",
            "SQLAlchemy ORM",
            "PostgreSQL database",
            "Bootstrap 5 frontend",
            "Chart.js for statistics",
            "ReportLab/WeasyPrint for PDFs",
            "Jinja2 templating",
            "Render for hosting"
        ],
        userTypes: [
            "Super Admin - full system control",
            "Tournament Organizer - create/manage events",
            "Score Keeper - enter match results",
            "Coach - view team stats",
            "Spectator - public brackets view"
        ],
        metrics: [
            "12 high schools using the system",
            "45+ tournaments managed",
            "500+ matches recorded",
            "2,000+ registered players"
        ],
        client: "Nairobi Secondary Schools Sports Association",
        timeline: "January 2024 - April 2024",
        status: "Live",
        repoLink: "#",
        demoLink: "#"
    },
    hospitalManagement: {
        title: "ClinicFlow HMS",
        icon: "bx-plus-medical",
        color: "red",
        summary: "Hospital management system designed for small private clinics in Kenya.",
        fullDescription: "A complete clinic management solution that digitizes patient records, appointments, pharmacy inventory, and billing. Built specifically for the workflow of Kenyan private clinics.",
        keyFeatures: [
            "Patient registration and medical history",
            "Appointment scheduling with reminders",
            "Electronic Health Records (EHR)",
            "Prescription management",
            "Pharmacy inventory tracking",
            "Billing and invoice generation",
            "Lab test ordering and results",
            "Doctor dashboard for patient visits",
            "Revenue reports by day/month",
            "Staff management and schedules"
        ],
        technicalStack: [
            "Django 4.2",
            "SQLite/PostgreSQL",
            "Bootstrap 5",
            "JavaScript (vanilla)",
            "PDFKit for prescriptions",
            "Chart.js for analytics",
            "Django REST Framework (API)"
        ],
        modules: [
            "Patient Management Module",
            "Appointment Module",
            "Pharmacy Module",
            "Billing Module",
            "Reports Module",
            "User Management Module"
        ],
        metrics: [
            "1 live clinic deployment",
            "15 beds capacity",
            "4 doctors using system",
            "500+ patient records",
            "300+ prescriptions generated"
        ],
        client: "Meru Medical Centre",
        timeline: "February 2024 - Present",
        status: "Production",
        repoLink: "#",
        demoLink: "#"
    }
};

// ============================================
// MODAL GENERATOR FUNCTIONS
// ============================================

function createModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const existingModal = document.getElementById("project-modal");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("div");
    modal.id = "project-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm";
    modal.style.animation = "fadeIn 0.2s ease";

    modal.innerHTML = `
        <div class="bg-[#0f131a] border border-[#1f2937] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div class="sticky top-0 bg-[#0f131a] border-b border-[#1f2937] px-8 py-5 flex items-center justify-between z-10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-${project.color}-500/10 rounded-lg flex items-center justify-center">
                        <i class='bx ${project.icon} text-2xl text-${project.color}-400'></i>
                    </div>
                    <h2 class="text-2xl font-bold text-white">${project.title}</h2>
                </div>
                <button onclick="closeModal()" class="text-gray-400 hover:text-white transition-colors">
                    <i class='bx bx-x text-3xl'></i>
                </button>
            </div>

            <div class="p-8">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span class="px-4 py-1.5 bg-${project.color}-500/10 text-${project.color}-300 rounded-full text-sm font-medium border border-${project.color}-500/20">
                        ${project.status}
                    </span>
                    <div class="flex gap-3">
                        <span class="text-xs text-gray-500">${project.timeline}</span>
                    </div>
                </div>

                <p class="text-gray-300 text-lg mb-8">${project.fullDescription}</p>

                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-check-circle text-${project.color}-400'></i>
                        Key Features
                    </h3>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${project.keyFeatures.map(feature => `
                            <div class="flex items-start gap-2">
                                <i class='bx bx-check text-${project.color}-400 mt-1'></i>
                                <span class="text-gray-400 text-sm">${feature}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-code-alt text-${project.color}-400'></i>
                        Technical Stack
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technicalStack.map(tech => `
                            <span class="px-3 py-1.5 bg-[#1e293b] text-gray-300 rounded-lg text-xs border border-[#334155]">
                                ${tech}
                            </span>
                        `).join("")}
                    </div>
                </div>

                ${project.challenges ? `
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-brain text-${project.color}-400'></i>
                        Challenges Solved
                    </h3>
                    <div class="space-y-2">
                        ${project.challenges.map(challenge => `
                            <div class="flex items-start gap-2">
                                <i class='bx bx-right-arrow-alt text-${project.color}-400 mt-1'></i>
                                <span class="text-gray-400 text-sm">${challenge}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : ""}

                ${project.screensModules ? `
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-layout text-${project.color}-400'></i>
                        System Modules
                    </h3>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${project.screensModules.map(module => `
                            <div class="flex items-start gap-2">
                                <i class='bx bx-cube text-${project.color}-400 mt-1'></i>
                                <span class="text-gray-400 text-sm">${module}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : ""}

                ${project.userTypes ? `
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-group text-${project.color}-400'></i>
                        User Roles
                    </h3>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${project.userTypes.map(user => `
                            <div class="flex items-start gap-2">
                                <i class='bx bx-user text-${project.color}-400 mt-1'></i>
                                <span class="text-gray-400 text-sm">${user}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : ""}

                ${project.modules ? `
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-package text-${project.color}-400'></i>
                        System Modules
                    </h3>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${project.modules.map(module => `
                            <div class="flex items-start gap-2">
                                <i class='bx bx-cube text-${project.color}-400 mt-1'></i>
                                <span class="text-gray-400 text-sm">${module}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : ""}

                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i class='bx bx-stats text-${project.color}-400'></i>
                        ${project.results ? "Results" : "Metrics"}
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${(project.results || project.metrics).map(metric => `
                            <div class="bg-[#111827] p-4 rounded-lg border border-[#1f2937]">
                                <div class="text-sm text-gray-400">${metric.split(":")[0]}</div>
                                <div class="text-lg font-bold text-white mt-1">${metric.split(":")[1] || metric}</div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#1f2937]">
                    <div>
                        <div class="text-xs text-gray-500">CLIENT</div>
                        <div class="text-sm text-white font-medium">${project.client}</div>
                    </div>
                    <div class="flex gap-3">
                        <a href="${project.repoLink}" class="px-5 py-2.5 bg-[#1e293b] hover:bg-[#2d3748] text-gray-300 rounded-lg text-sm transition-colors flex items-center gap-2">
                            <i class='bx bxl-github'></i>
                            Source Code
                        </a>
                        <a href="${project.demoLink}" class="px-5 py-2.5 bg-${project.color}-600 hover:bg-${project.color}-700 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                            <i class='bx bx-show'></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    if (modal) {
        modal.style.animation = "fadeOut 0.2s ease";
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = "auto";
        }, 150);
    }
}

const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
