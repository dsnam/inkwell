initSidebarItems({"constant":[["LLVMDIFlagAccessibility",""],["LLVMDIFlagPtrToMemberRep",""]],"enum":[["LLVMDIFlags","Debug info flags."],["LLVMDWARFEmissionKind","The amount of debug information to emit."],["LLVMDWARFMacinfoRecordType",""],["LLVMDWARFSourceLanguage","Source languages known by DWARF."],["LLVMMetadataKind",""]],"fn":[["LLVMCreateDIBuilder","Construct a builder for a module and collect unresolved nodes."],["LLVMCreateDIBuilderDisallowUnresolved","Construct a builder for a module, do not allow unresolved nodes."],["LLVMDIBuilderCreateArrayType","Create debugging information entry for an array."],["LLVMDIBuilderCreateArtificialType","Create a uniqued DIType* clone with FlagArtificial set."],["LLVMDIBuilderCreateAutoVariable","Create a new descriptor for a local auto variable."],["LLVMDIBuilderCreateBasicType","Create debugging information entry for a basic type."],["LLVMDIBuilderCreateBitFieldMemberType","Create debugging information entry for a bit field member."],["LLVMDIBuilderCreateClassType","Create debugging information entry for a class."],["LLVMDIBuilderCreateCompileUnit",""],["LLVMDIBuilderCreateConstantValueExpression","Create a new descriptor for the specified variable that does not have an"],["LLVMDIBuilderCreateDebugLocation","Creates a new DebugLocation that describes a source location."],["LLVMDIBuilderCreateEnumerationType","Create debugging information entry for an enumeration."],["LLVMDIBuilderCreateEnumerator","Create debugging information entry for an enumerator."],["LLVMDIBuilderCreateExpression","Create a new descriptor for the specified variable which has a complex"],["LLVMDIBuilderCreateFile","Create a file descriptor to hold debugging information for a file."],["LLVMDIBuilderCreateForwardDecl","Create a permanent forward-declared type."],["LLVMDIBuilderCreateFunction","Create a new descriptor for the specified subprogram."],["LLVMDIBuilderCreateGlobalVariableExpression","Create a new descriptor for the specified variable."],["LLVMDIBuilderCreateImportedDeclaration","Create a descriptor for an imported function, type, or variable."],["LLVMDIBuilderCreateImportedModuleFromAlias","Create a descriptor for an imported module that aliases another imported entity descriptor."],["LLVMDIBuilderCreateImportedModuleFromModule","Create a descriptor for an imported module."],["LLVMDIBuilderCreateImportedModuleFromNamespace","Create a descriptor for an imported namespace. Suitable for e.g. C++ using declarations."],["LLVMDIBuilderCreateInheritance","Create debugging information entry to establish inheritance relationship between two types."],["LLVMDIBuilderCreateLexicalBlock","Create a descriptor for a lexical block with the specified parent context."],["LLVMDIBuilderCreateLexicalBlockFile","Create a descriptor for a lexical block with a new file attached."],["LLVMDIBuilderCreateMacro",""],["LLVMDIBuilderCreateMemberPointerType","Create debugging information entry for a pointer to member."],["LLVMDIBuilderCreateMemberType","Create debugging information entry for a member."],["LLVMDIBuilderCreateModule","Creates a new descriptor for a module with the specified parent scope."],["LLVMDIBuilderCreateNameSpace","Creates a new descriptor for a namespace with the specified parent scope."],["LLVMDIBuilderCreateNullPtrType","Create C++11 nullptr type."],["LLVMDIBuilderCreateObjCIVar","Create debugging information entry for Objective-C instance variable."],["LLVMDIBuilderCreateObjCProperty","Create debugging information entry for Objective-C property."],["LLVMDIBuilderCreateObjectPointerType","Create a uniqued DIType* clone with FlagObjectPointer and FlagArtificial set."],["LLVMDIBuilderCreateParameterVariable","Create a new descriptor for a function parameter variable."],["LLVMDIBuilderCreatePointerType","Create debugging information entry for a pointer."],["LLVMDIBuilderCreateQualifiedType","Create debugging information entry for a qualified type, e.g. 'const int'."],["LLVMDIBuilderCreateReferenceType","Create debugging information entry for a c++ style reference or rvalue reference type."],["LLVMDIBuilderCreateReplaceableCompositeType","Create a temporary forward-declared type."],["LLVMDIBuilderCreateStaticMemberType","Create debugging information entry for a C++ static data member."],["LLVMDIBuilderCreateStructType","Create debugging information entry for a struct."],["LLVMDIBuilderCreateSubroutineType","Create subroutine type."],["LLVMDIBuilderCreateTempGlobalVariableFwdDecl","Create a new descriptor for the specified global variable that is temporary"],["LLVMDIBuilderCreateTempMacroFile",""],["LLVMDIBuilderCreateTypedef","Create debugging information entry for a typedef."],["LLVMDIBuilderCreateUnionType","Create debugging information entry for a union."],["LLVMDIBuilderCreateUnspecifiedType","Create a DWARF unspecified type."],["LLVMDIBuilderCreateVectorType","Create debugging information entry for a vector type."],["LLVMDIBuilderFinalize","Construct any deferred debug info descriptors."],["LLVMDIBuilderGetOrCreateArray","Create an array of DI Nodes."],["LLVMDIBuilderGetOrCreateSubrange","Create a descriptor for a value range."],["LLVMDIBuilderGetOrCreateTypeArray","Create a type array."],["LLVMDIBuilderInsertDbgValueAtEnd","Insert a new llvm.dbg.value intrinsic call at the end of the given basic block. If the basic block has a terminator instruction, the intrinsic is inserted before that terminator instruction."],["LLVMDIBuilderInsertDbgValueBefore","Insert a new llvm.dbg.value intrinsic call before the given instruction."],["LLVMDIBuilderInsertDeclareAtEnd","Insert a new llvm.dbg.declare intrinsic call at the end of the given basic block. If the basic block has a terminator instruction, the intrinsic is inserted before that terminator instruction."],["LLVMDIBuilderInsertDeclareBefore","Insert a new llvm.dbg.declare intrinsic call before the given instruction."],["LLVMDIFileGetDirectory","Get the directory of a given file."],["LLVMDIFileGetFilename","Get the name of a given file."],["LLVMDIFileGetSource","Get the source of a given file."],["LLVMDIGlobalVariableExpressionGetExpression","Retrieves the DIExpression associated with this global variable expression."],["LLVMDIGlobalVariableExpressionGetVariable","Retrieves the DIVariable associated with this global variable expression."],["LLVMDILocationGetColumn","Get the column number of this debug location."],["LLVMDILocationGetInlinedAt","Get the \"inline at\" location associated with this debug location."],["LLVMDILocationGetLine","Get the line number of this debug location."],["LLVMDILocationGetScope","Get the local scope associated with this debug location."],["LLVMDIScopeGetFile","Get the metadata of the file associated with a given scope."],["LLVMDISubprogramGetLine","Get the line associated with a given subprogram."],["LLVMDITypeGetAlignInBits","Get the alignment of this DIType in bits."],["LLVMDITypeGetFlags","Get the flags associated with this DIType."],["LLVMDITypeGetLine","Get the source line where this DIType is declared."],["LLVMDITypeGetName","Get the name of this DIType."],["LLVMDITypeGetOffsetInBits","Get the offset of this DIType in bits."],["LLVMDITypeGetSizeInBits","Get the size of this DIType in bits."],["LLVMDIVariableGetFile","Get the metadata of the file associated with a given variable."],["LLVMDIVariableGetLine","Get the source line where this \\c DIVariable is declared."],["LLVMDIVariableGetScope","Get the metadata of the scope associated with a given variable."],["LLVMDebugMetadataVersion","The current debug metadata version number."],["LLVMDisposeDIBuilder","Deallocate a builder and everything it owns."],["LLVMDisposeTemporaryMDNode","Deallocate a temporary node."],["LLVMGetMetadataKind","Obtain the enumerated type of a metadata instance."],["LLVMGetModuleDebugMetadataVersion","The version of debug metadata that's present in the provided Module."],["LLVMGetSubprogram","Get the metadata of the subprogram attached to a function."],["LLVMInstructionGetDebugLoc","Get the debug location for the given instruction."],["LLVMInstructionSetDebugLoc","Set the debug location for the given instruction."],["LLVMMetadataReplaceAllUsesWith","Replace all uses of temporary metadata."],["LLVMSetSubprogram","Set the subprogram attached to a function."],["LLVMStripModuleDebugInfo","Strip debug info in the module if it exists."],["LLVMTemporaryMDNode","Create a new temporary \\c MDNode.  Suitable for use in constructing cyclic"]],"type":[["LLVMDWARFTypeEncoding",""]]});