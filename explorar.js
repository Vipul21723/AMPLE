// // // // // // // ... (rest of your JavaScript code remains the same)
// // // // // // const folderStructure1 = {
// // // // // //     "Educational Library": {
// // // // // //         "GTU": {
// // // // // //             "PYQ": ["Semester1.pdf", "Semester2.pdf", "Semester3.txt"],
// // // // // //             "Study Material": ["Maths.pdf", "Science.txt"],
// // // // // //             "Reference Book": ["Book1.pdf", "Book2.txt"]
// // // // // //         },
// // // // // //         "IIT": {
// // // // // //             "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// // // // // //             "Study Material": ["Chemistry.txt", "Biology.pdf"],
// // // // // //             "Reference Book": ["ResearchPaper1.pdf", "ResearchPaper2.txt"]
// // // // // //         }
// // // // // //     }
// // // // // // };



// // // // // // const folderStructure = {
// // // // // //     "Educational Library": {
// // // // // //         "GTU": {
// // // // // //             "Computer Engineering": {
// // // // // //                 "Semester 1": {
// // // // // //                     "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
// // // // // //                     "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
// // // // // //                 },
// // // // // //                 "Semester 2": {
// // // // // //                     "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
// // // // // //                     "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
// // // // // //                 }
// // // // // //             },
// // // // // //             "Mechanical Engineering": {
// // // // // //                 "Semester 1": {
// // // // // //                     "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
// // // // // //                     "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
// // // // // //                 },
// // // // // //                 "Semester 2": {
// // // // // //                     "Thermodynamics": ["Thermo_Basics.pdf", "Thermo_Application.txt"],
// // // // // //                     "Material Science": ["Material_Theory.pdf", "Material_Lab.txt"]
// // // // // //                 }
// // // // // //             },
// // // // // //             "Electrical Engineering": {
// // // // // //                 "Semester 1": {
// // // // // //                     "Basic Electrical": ["Electrical_Theory.pdf", "Electrical_Lab.txt"],
// // // // // //                     "Network Analysis": ["Network_Analysis.pdf", "Network_Problem.txt"]
// // // // // //                 },
// // // // // //                 "Semester 2": {
// // // // // //                     "Digital Electronics": ["Digital_Theory.pdf", "Digital_Circuit.txt"],
// // // // // //                     "Circuit Theory": ["Circuit_Theory.pdf", "Circuit_Lab.txt"]
// // // // // //                 }
// // // // // //             }
// // // // // //         },
// // // // // //         "IIT": {
// // // // // //             "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// // // // // //             "Study Material": ["Chemistry.txt", "Biology.pdf"],
// // // // // //             "Reference Book": ["ResearchPaper1.pdf", "ResearchPaper2.txt"]
// // // // // //         }
// // // // // //     }
// // // // // // };

// // // // // // function createFolderStructure(structure, container, level = 0) {
// // // // // //     for (const key in structure) {
// // // // // //         const item = structure[key];
// // // // // //         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
// // // // // //         const isFileList = Array.isArray(item);
// // // // // //         const element = document.createElement('div');
// // // // // //         element.textContent = key;
// // // // // //         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
// // // // // //         element.style.paddingLeft = `${level * 20}px`;

// // // // // //         if (isFolder) {
// // // // // //             const subContainer = document.createElement('div');
// // // // // //             subContainer.classList.add('subfolder');
// // // // // //             subContainer.style.display = 'none';

// // // // // //             element.addEventListener('click', function () {
// // // // // //                 // Close other siblings
// // // // // //                 const siblings = Array.from(container.children).filter(child => child !== element && child.classList.contains('folder'));
// // // // // //                 siblings.forEach(sibling => {
// // // // // //                     sibling.nextElementSibling.style.display = 'none';
// // // // // //                     sibling.classList.remove('opened');
// // // // // //                 });

// // // // // //                 subContainer.style.display = subContainer.style.display === 'none' ? 'block' : 'none';
// // // // // //                 element.classList.toggle('opened');
// // // // // //             });

// // // // // //             createFolderStructure(item, subContainer, level + 1);
// // // // // //             container.appendChild(element);
// // // // // //             container.appendChild(subContainer);
// // // // // //         } else if (isFileList) {
// // // // // //             const fileContainer = document.createElement('div');
// // // // // //             fileContainer.classList.add('subfolder');
// // // // // //             fileContainer.style.display = 'none';

// // // // // //             element.addEventListener('click', function () {
// // // // // //                 // Close other siblings
// // // // // //                 const siblings = Array.from(container.children).filter(child => child !== element && child.classList.contains('folder') && child.nextElementSibling.classList.contains('subfolder'));
// // // // // //                 siblings.forEach(sibling => {
// // // // // //                     sibling.nextElementSibling.style.display = 'none';
// // // // // //                     sibling.classList.remove('opened');
// // // // // //                 });

// // // // // //                 fileContainer.style.display = fileContainer.style.display === 'none' ? 'block' : 'none';
// // // // // //                 element.classList.toggle('opened');
// // // // // //             });

// // // // // //             item.forEach(fileName => {
// // // // // //                 const fileElement = document.createElement('div');
// // // // // //                 fileElement.textContent = fileName;
// // // // // //                 fileElement.classList.add('file');
// // // // // //                 fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
// // // // // //                 if (fileName.endsWith('.pdf')) {
// // // // // //                     fileElement.classList.add('pdf');
// // // // // //                     fileElement.addEventListener('click', function(event) {
// // // // // //                         event.stopPropagation(); // Prevent folder toggle
// // // // // //                         window.open(fileName, '_blank'); // Open PDF in new tab
// // // // // //                     });
// // // // // //                 }
// // // // // //                 fileContainer.appendChild(fileElement);
// // // // // //             });
// // // // // //             container.appendChild(element);
// // // // // //             container.appendChild(fileContainer);
// // // // // //         } else {
// // // // // //             container.appendChild(element);
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // const folderContainer = document.getElementById('folder-container');
// // // // // // createFolderStructure(folderStructure, folderContainer);


// // // // // const folderStructure = {
// // // // //     "Educational Library": {
// // // // //         "GTU": {
// // // // //             "Computer Engineering": {
// // // // //                 "Semester 1": {
// // // // //                     "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
// // // // //                     "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
// // // // //                 },
// // // // //                 "Semester 2": {
// // // // //                     "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
// // // // //                     "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
// // // // //                 }
// // // // //             },
// // // // //             "Mechanical Engineering": {
// // // // //                 "Semester 1": {
// // // // //                     "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
// // // // //                     "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
// // // // //                 }
// // // // //             }
// // // // //         },
// // // // //         "IIT": {
// // // // //             "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// // // // //             "Study Material": ["Chemistry.txt", "Biology.pdf"]
// // // // //         }
// // // // //     }
// // // // // };

// // // // // const folderContainer = document.getElementById('folder-container');

// // // // // // Toggle the sliding effect when clicking the Explorar section
// // // // // const explorarHeader = document.querySelector('.Explorar');
// // // // // explorarHeader.addEventListener('click', () => {
// // // // //     folderContainer.classList.toggle('open');
// // // // // });

// // // // // function createFolderStructure(structure, container, level = 0) {
// // // // //     for (const key in structure) {
// // // // //         const item = structure[key];
// // // // //         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
// // // // //         const isFileList = Array.isArray(item);
// // // // //         const element = document.createElement('div');
// // // // //         element.textContent = key;
// // // // //         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
// // // // //         element.style.paddingLeft = `${level * 20}px`;

// // // // //         if (isFolder || isFileList) {
// // // // //             const subContainer = document.createElement('div');
// // // // //             subContainer.classList.add('subfolder');

// // // // //             element.addEventListener('click', (event) => {
// // // // //                 event.stopPropagation(); // Prevent parent folder from toggling
// // // // //                 subContainer.classList.toggle('visible');
// // // // //                 element.classList.toggle('opened');
// // // // //             });

// // // // //             if (isFolder) {
// // // // //                 createFolderStructure(item, subContainer, level + 1);
// // // // //             } else if (isFileList) {
// // // // //                 item.forEach(fileName => {
// // // // //                     const fileElement = document.createElement('div');
// // // // //                     fileElement.textContent = fileName;
// // // // //                     fileElement.classList.add('file');
// // // // //                     fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
// // // // //                     if (fileName.endsWith('.pdf')) {
// // // // //                         fileElement.classList.add('pdf');
// // // // //                         fileElement.addEventListener('click', (event) => {
// // // // //                             event.stopPropagation();
// // // // //                             window.open(fileName, '_blank');
// // // // //                         });
// // // // //                     }
// // // // //                     subContainer.appendChild(fileElement);
// // // // //                 });
// // // // //             }
// // // // //             container.appendChild(element);
// // // // //             container.appendChild(subContainer);
// // // // //         }
// // // // //     }
// // // // // }

// // // // // createFolderStructure(folderStructure, folderContainer);


// // // // const folderStructure = {
// // // //     "Educational Library": {
// // // //         "GTU": {
// // // //             "Computer Engineering": {
// // // //                 "Semester 1": {
// // // //                     "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
// // // //                     "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
// // // //                 },
// // // //                 "Semester 2": {
// // // //                     "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
// // // //                     "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
// // // //                 }
// // // //             },
// // // //             "Mechanical Engineering": {
// // // //                 "Semester 1": {
// // // //                     "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
// // // //                     "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
// // // //                 }
// // // //             }
// // // //         },
// // // //         "IIT": {
// // // //             "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// // // //             "Study Material": ["Chemistry.txt", "Biology.pdf"]
// // // //         }
// // // //     }
// // // // };

// // // // const folderContainer = document.getElementById('folder-container');
// // // // const explorarHeader = document.querySelector('.Explorar');

// // // // // Open by default (remove the 'closed' class initially)
// // // // folderContainer.classList.remove('closed'); // Ensure it's open on load

// // // // // Toggle the sliding effect when clicking the Explorar header
// // // // explorarHeader.addEventListener('click', () => {
// // // //     folderContainer.classList.toggle('closed');
// // // // });

// // // // function createFolderStructure(structure, container, level = 0) {
// // // //     for (const key in structure) {
// // // //         const item = structure[key];
// // // //         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
// // // //         const isFileList = Array.isArray(item);
// // // //         const element = document.createElement('div');
// // // //         element.textContent = key;
// // // //         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
// // // //         element.style.paddingLeft = `${level * 20}px`;

// // // //         if (isFolder || isFileList) {
// // // //             const subContainer = document.createElement('div');
// // // //             subContainer.classList.add('subfolder');

// // // //             element.addEventListener('click', (event) => {
// // // //                 event.stopPropagation(); // Prevent parent folder from toggling

// // // //                 // Close all sibling folders at the same level
// // // //                 const siblings = Array.from(container.children).filter(child => 
// // // //                     child !== element && 
// // // //                     child.classList.contains('folder') && 
// // // //                     child.nextElementSibling
// // // //                 );
// // // //                 siblings.forEach(sibling => {
// // // //                     sibling.classList.remove('opened');
// // // //                     sibling.nextElementSibling.classList.remove('visible');
// // // //                 });

// // // //                 // Toggle the current folder
// // // //                 subContainer.classList.toggle('visible');
// // // //                 element.classList.toggle('opened');
// // // //             });

// // // //             if (isFolder) {
// // // //                 createFolderStructure(item, subContainer, level + 1);
// // // //             } else if (isFileList) {
// // // //                 item.forEach(fileName => {
// // // //                     const fileElement = document.createElement('div');
// // // //                     fileElement.textContent = fileName;
// // // //                     fileElement.classList.add('file');
// // // //                     fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
// // // //                     if (fileName.endsWith('.pdf')) {
// // // //                         fileElement.classList.add('pdf');
// // // //                         fileElement.addEventListener('click', (event) => {
// // // //                             event.stopPropagation();
// // // //                             window.open(fileName, '_blank');
// // // //                         });
// // // //                     }
// // // //                     subContainer.appendChild(fileElement);
// // // //                 });
// // // //             }
// // // //             container.appendChild(element);
// // // //             container.appendChild(subContainer);
// // // //         }
// // // //     }
// // // // }

// // // // createFolderStructure(folderStructure, folderContainer);


// // // const folderStructure = {
// // //     "Educational Library": {
// // //         "GTU": {
// // //             "Computer Engineering": {
// // //                 "Semester 1": {
// // //                     "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
// // //                     "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
// // //                 },
// // //                 "Semester 2": {
// // //                     "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
// // //                     "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
// // //                 }
// // //             },
// // //             "Mechanical Engineering": {
// // //                 "Semester 1": {
// // //                     "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
// // //                     "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
// // //                 }
// // //             }
// // //         },
// // //         "IIT": {
// // //             "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// // //             "Study Material": ["Chemistry.txt", "Biology.pdf"]
// // //         }
// // //     }
// // // };

// // // const folderContainer = document.getElementById('folder-container');
// // // const explorarHeader = document.querySelector('.Explorar');

// // // // Remove the toggle event listener from the header (no collapsing)
// // // // Optionally, you can keep this commented out if you want to re-enable it later:
// // // // explorarHeader.addEventListener('click', () => {
// // // //     folderContainer.classList.toggle('closed');
// // // // });

// // // // Automatically open the top-level folder ("Educational Library") on load
// // // function createFolderStructure(structure, container, level = 0, autoOpen = false) {
// // //     for (const key in structure) {
// // //         const item = structure[key];
// // //         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
// // //         const isFileList = Array.isArray(item);
// // //         const element = document.createElement('div');
// // //         element.textContent = key;
// // //         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
// // //         element.style.paddingLeft = `${level * 20}px`;

// // //         if (isFolder || isFileList) {
// // //             const subContainer = document.createElement('div');
// // //             subContainer.classList.add('subfolder');

// // //             element.addEventListener('click', (event) => {
// // //                 event.stopPropagation();

// // //                 // Close all sibling folders at the same level
// // //                 const siblings = Array.from(container.children).filter(child => 
// // //                     child !== element && 
// // //                     child.classList.contains('folder') && 
// // //                     child.nextElementSibling
// // //                 );
// // //                 siblings.forEach(sibling => {
// // //                     sibling.classList.remove('opened');
// // //                     sibling.nextElementSibling.classList.remove('visible');
// // //                 });

// // //                 // Toggle the current folder
// // //                 subContainer.classList.toggle('visible');
// // //                 element.classList.toggle('opened');
// // //             });

// // //             if (isFolder) {
// // //                 createFolderStructure(item, subContainer, level + 1);
// // //             } else if (isFileList) {
// // //                 item.forEach(fileName => {
// // //                     const fileElement = document.createElement('div');
// // //                     fileElement.textContent = fileName;
// // //                     fileElement.classList.add('file');
// // //                     fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
// // //                     if (fileName.endsWith('.pdf')) {
// // //                         fileElement.classList.add('pdf');
// // //                         fileElement.addEventListener('click', (event) => {
// // //                             event.stopPropagation();
// // //                             window.open(fileName, '_blank');
// // //                         });
// // //                     }
// // //                     subContainer.appendChild(fileElement);
// // //                 });
// // //             }
// // //             container.appendChild(element);
// // //             container.appendChild(subContainer);

// // //             // Auto-open the top-level folder on page load
// // //             if (level === 0 && autoOpen) {
// // //                 subContainer.classList.add('visible');
// // //                 element.classList.add('opened');
// // //             }
// // //         }
// // //     }
// // // }

// // // // Create the folder structure and auto-open the top level
// // // createFolderStructure(folderStructure, folderContainer, 0, true);



// // const folderStructure = {
// //     "GTU": {
// //         "Computer Engineering": {
// //             "Semester 1": {
// //                 "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
// //                 "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
// //             },
// //             "Semester 2": {
// //                 "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
// //                 "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
// //             }
// //         },
// //         "Mechanical Engineering": {
// //             "Semester 1": {
// //                 "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
// //                 "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
// //             }
// //         }
// //     },
// //     "IIT": {
// //         "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
// //         "Study Material": ["Chemistry.txt", "Biology.pdf"]
// //     }
// // };

// // const folderContainer = document.getElementById('folder-container');
// // const folderHeader = document.querySelector('.Explorar .folder-header');

// // // Open "GTU" and "IIT" when clicking "Explorar"
// // folderHeader.addEventListener('click', (event) => {
// //     event.stopPropagation();
// //     const topLevelFolders = Array.from(folderContainer.children).filter(child => 
// //         child.classList.contains('folder') && child.nextElementSibling
// //     );
// //     if (topLevelFolders.length > 0 && !topLevelFolders[0].classList.contains('opened')) {
// //         topLevelFolders[0].classList.add('opened');
// //         topLevelFolders[0].nextElementSibling.classList.add('visible');
// //     }
// // });

// // function createFolderStructure(structure, container, level = 0) {
// //     for (const key in structure) {
// //         const item = structure[key];
// //         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
// //         const isFileList = Array.isArray(item);
// //         const element = document.createElement('div');
// //         element.textContent = key;
// //         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
// //         element.style.paddingLeft = `${level * 20}px`;

// //         if (isFolder || isFileList) {
// //             const subContainer = document.createElement('div');
// //             subContainer.classList.add('subfolder');

// //             element.addEventListener('click', (event) => {
// //                 event.stopPropagation();

// //                 // Close all sibling folders at the same level
// //                 const siblings = Array.from(container.children).filter(child => 
// //                     child !== element && 
// //                     child.classList.contains('folder') && 
// //                     child.nextElementSibling
// //                 );
// //                 siblings.forEach(sibling => {
// //                     sibling.classList.remove('opened');
// //                     sibling.nextElementSibling.classList.remove('visible');
// //                 });

// //                 // Toggle the current folder
// //                 subContainer.classList.toggle('visible');
// //                 element.classList.toggle('opened');
// //             });

// //             if (isFolder) {
// //                 createFolderStructure(item, subContainer, level + 1);
// //             } else if (isFileList) {
// //                 item.forEach(fileName => {
// //                     const fileElement = document.createElement('div');
// //                     fileElement.textContent = fileName;
// //                     fileElement.classList.add('file');
// //                     fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
// //                     if (fileName.endsWith('.pdf')) {
// //                         fileElement.classList.add('pdf');
// //                         fileElement.addEventListener('click', (event) => {
// //                             event.stopPropagation();
// //                             window.open(fileName, '_blank');
// //                         });
// //                     }
// //                     subContainer.appendChild(fileElement);
// //                 });
// //             }
// //             container.appendChild(element);
// //             container.appendChild(subContainer);
// //         }
// //     }
// // }

// // // Create the folder structure
// // createFolderStructure(folderStructure, folderContainer);

// // // Auto-open the first top-level folder ("GTU") on load
// // const topLevelFolders = Array.from(folderContainer.children).filter(child => 
// //     child.classList.contains('folder') && child.nextElementSibling
// // );
// // if (topLevelFolders.length > 0) {
// //     topLevelFolders[0].classList.add('opened');
// //     topLevelFolders[0].nextElementSibling.classList.add('visible');
// // }


// const folderStructure = {
//     "GTU": {
//         "Computer Engineering": {
//             "Semester 1": {
//                 "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
//                 "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
//             },
//             "Semester 2": {
//                 "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
//                 "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
//             }
//         },
//         "Mechanical Engineering": {
//             "Semester 1": {
//                 "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
//                 "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
//             }
//         }
//     },
//     "IIT": {
//         "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
//         "Study Material": ["Chemistry.txt", "Biology.pdf"]
//     }
// };

// const folderContainer = document.getElementById('folder-container');
// const folderHeader = document.querySelector('.Explorar .folder-header');

// // Toggle "GTU" and "IIT" when clicking "Explorar"
// folderHeader.addEventListener('click', (event) => {
//     event.stopPropagation();
//     const topLevelFolders = Array.from(folderContainer.children).filter(child => 
//         child.classList.contains('folder') && child.nextElementSibling
//     );
//     if (topLevelFolders.length > 0) {
//         // If no top-level folder is open, open the first one ("GTU")
//         const anyOpen = topLevelFolders.some(folder => folder.classList.contains('opened'));
//         if (!anyOpen) {
//             topLevelFolders[0].classList.add('opened');
//             topLevelFolders[0].nextElementSibling.classList.add('visible');
//         }
//     }
// });

// function createFolderStructure(structure, container, level = 0) {
//     for (const key in structure) {
//         const item = structure[key];
//         const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
//         const isFileList = Array.isArray(item);
//         const element = document.createElement('div');
//         element.textContent = key;
//         element.classList.add(isFolder || isFileList ? 'folder' : 'file');
//         element.style.paddingLeft = `${level * 20}px`;

//         if (isFolder || isFileList) {
//             const subContainer = document.createElement('div');
//             subContainer.classList.add('subfolder');

//             element.addEventListener('click', (event) => {
//                 event.stopPropagation();

//                 // Close all sibling folders at the same level
//                 const siblings = Array.from(container.children).filter(child => 
//                     child !== element && 
//                     child.classList.contains('folder') && 
//                     child.nextElementSibling
//                 );
//                 siblings.forEach(sibling => {
//                     sibling.classList.remove('opened');
//                     sibling.nextElementSibling.classList.remove('visible');
//                 });

//                 // Toggle the current folder
//                 subContainer.classList.toggle('visible');
//                 element.classList.toggle('opened');
//             });

//             if (isFolder) {
//                 createFolderStructure(item, subContainer, level + 1);
//             } else if (isFileList) {
//                 item.forEach(fileName => {
//                     const fileElement = document.createElement('div');
//                     fileElement.textContent = fileName;
//                     fileElement.classList.add('file');
//                     fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
//                     if (fileName.endsWith('.pdf')) {
//                         fileElement.classList.add('pdf');
//                         fileElement.addEventListener('click', (event) => {
//                             event.stopPropagation();
//                             window.open(fileName, '_blank');
//                         });
//                     }
//                     subContainer.appendChild(fileElement);
//                 });
//             }
//             container.appendChild(element);
//             container.appendChild(subContainer);
//         }
//     }
// }

// // Create the folder structure without auto-opening
// createFolderStructure(folderStructure, folderContainer);


const folderStructure = {
    "GTU": {
        "Computer Engineering": {
            "Semester 1": {
                "Maths": ["Maths1_Notes.pdf", "Maths1_Assignment.txt"],
                "Physics": ["Physics1_Lecture.pdf", "Physics1_Lab.txt"]
            },
            "Semester 2": {
                "Programming": ["C_Basics.pdf", "C++_Advanced.txt"],
                "Electronics": ["Electronics1_Theory.pdf", "Electronics1_Lab.txt"]
            }
        },
        "Mechanical Engineering": {
            "Semester 1": {
                "Engineering Drawing": ["Drawing_Basics.pdf", "Drawing_Practice.txt"],
                "Applied Mechanics": ["Mechanics_Theory.pdf", "Mechanics_Problem.txt"]
            }
        }
    },
    "IIT": {
        "PYQ": ["AdvancedMath.pdf", "Physics.txt"],
        "Study Material": ["Chemistry.txt", "Biology.pdf"]
    }
};

const folderContainer = document.getElementById('folder-container');
const folderHeader = document.querySelector('.Explorar .folder-header');

// Toggle the folder container when clicking "Explorar"
folderHeader.addEventListener('click', (event) => {
    event.stopPropagation();
    folderContainer.classList.toggle('open');
});

function createFolderStructure(structure, container, level = 0) {
    for (const key in structure) {
        const item = structure[key];
        const isFolder = typeof item === 'object' && item !== null && !Array.isArray(item);
        const isFileList = Array.isArray(item);
        const element = document.createElement('div');
        element.textContent = key;
        element.classList.add(isFolder || isFileList ? 'folder' : 'file');
        element.style.paddingLeft = `${level * 20}px`;

        if (isFolder || isFileList) {
            const subContainer = document.createElement('div');
            subContainer.classList.add('subfolder');

            element.addEventListener('click', (event) => {
                event.stopPropagation();

                // Close all sibling folders at the same level
                const siblings = Array.from(container.children).filter(child => 
                    child !== element && 
                    child.classList.contains('folder') && 
                    child.nextElementSibling
                );
                siblings.forEach(sibling => {
                    sibling.classList.remove('opened');
                    sibling.nextElementSibling.classList.remove('visible');
                });

                // Toggle the current folder
                subContainer.classList.toggle('visible');
                element.classList.toggle('opened');
            });

            if (isFolder) {
                createFolderStructure(item, subContainer, level + 1);
            } else if (isFileList) {
                item.forEach(fileName => {
                    const fileElement = document.createElement('div');
                    fileElement.textContent = fileName;
                    fileElement.classList.add('file');
                    fileElement.style.paddingLeft = `${(level + 1) * 20}px`;
                    if (fileName.endsWith('.pdf')) {
                        fileElement.classList.add('pdf');
                        fileElement.addEventListener('click', (event) => {
                            event.stopPropagation();
                            window.open(fileName, '_blank');
                        });
                    }
                    subContainer.appendChild(fileElement);
                });
            }
            container.appendChild(element);
            container.appendChild(subContainer);
        }
    }
}

// Create the folder structure (closed by default)
createFolderStructure(folderStructure, folderContainer);