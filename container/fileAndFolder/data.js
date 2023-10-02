export const folderStructure = [
    {
        id: '1',
        name: 'First Folder',
        folderOrNot: true,
        item: [
            {
                id: '1',
                name: 'root',
                folderOrNot: true,
                item: [
                    {
                        id: '1',
                        name: 'root',
                        folderOrNot: false,
                    },
                    {
                        id: '1',
                        name: 'root',
                        folderOrNot: true,
                        item: [
                            {
                                id: '1',
                                name: 'root',
                                fileOrNot: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        name: 'First File',
        folderOrNot: false,
    },
];
